export type InputSource = 'camera' | 'simulated' | 'manual';
export interface GazeSample {
  timestampMs: number;
  x: number | null;
  y: number | null;
  valid: boolean;
  invalidReason: string | null;
  source: InputSource;
}
export interface TargetRegion { id: string; x: number; y: number; width: number; height: number; enabled: boolean }
export interface GazeEvent {
  timestampMs: number;
  type: 'dwellProgress' | 'targetConfirmed' | 'signalLost';
  targetId: string | null;
  progress: number;
}
export interface SceneEvent {
  timestampMs: number;
  type: 'nodeArrived' | 'movementStarted' | 'movementEnded' | 'environmentStarted' | 'environmentEnded';
  nodeId?: string;
  eventId?: string;
}
export interface TrainingCommand {
  type: 'startTask' | 'showPrompt' | 'triggerEnvironment' | 'endSession';
  taskId?: string;
  eventId?: string;
  message?: string;
}
export type Unsubscribe = () => void;
export interface AttentionPort {
  subscribeSamples(listener: (sample: GazeSample) => void): Unsubscribe;
  subscribeEvents(listener: (event: GazeEvent) => void): Unsubscribe;
  setTargets(targets: TargetRegion[]): void;
}
export interface ScenePort {
  subscribeEvents(listener: (event: SceneEvent) => void): Unsubscribe;
  handleCommand(command: TrainingCommand): void;
}
