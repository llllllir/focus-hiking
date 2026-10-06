// Shared weather/forest output, unlocked before asynchronous game entry.
let context: AudioContext | null = null;
let output: GainNode | null = null;
let users = 0, owners = 0, volume = .8;
function ensure() {
  if (!context || context.state === 'closed') {
    context = new AudioContext();
    output = context.createGain(); output.gain.value = volume;
    const limiter = context.createDynamicsCompressor();
    limiter.threshold.value = -6; limiter.knee.value = 6; limiter.ratio.value = 8;
    limiter.attack.value = .005; limiter.release.value = .2;
    output.connect(limiter).connect(context.destination);
  }
  return context;
}
export async function unlockForestAudio() { await ensure().resume(); }
export async function resumeForestAudio(ctx: AudioContext) {
  let timer: ReturnType<typeof setTimeout> | undefined;
  try {
    await Promise.race([ctx.resume(), new Promise<never>((_, reject) => { timer = setTimeout(() => reject(new Error('请点击开启环境声音')), 2500); })]);
    if (ctx.state !== 'running') throw new Error('请点击开启环境声音');
  } finally { clearTimeout(timer); }
}
export function acquireForestAudio() { const ctx = ensure(); users++; return { context: ctx, output: output! }; }
function releaseIfUnused() {
  if (!users && !owners && context) { const old = context; context = null; output = null; void old.close(); }
}
export function releaseForestAudio(ctx: AudioContext) { if (ctx !== context) return; users = Math.max(0, users - 1); releaseIfUnused(); }
export function retainForestAudio() {
  owners++;
  let released = false;
  return () => { if (released) return; released = true; owners--; releaseIfUnused(); };
}
export function setForestVolume(value: number) {
  volume = Math.max(0, Math.min(1, value));
  if (context && output) output.gain.setTargetAtTime(volume, context.currentTime, .08);
}
export function forestVolume() { return volume; }
