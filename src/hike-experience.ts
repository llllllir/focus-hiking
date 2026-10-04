import { mountGazeTest } from './attention/test-page';
import type { CameraAttention } from './attention/camera';
import { browserArchive, renderArchive, mountHikeGame } from './game/hike-game';

/** Page composition: the A calibration UI publishes its existing AttentionPort;
 * B consumes that port without reading camera frames or model features. */
export function mountHikeExperience(parent:HTMLElement) {
  const archive=browserArchive();let disposed=false,setupDispose:(()=>void)|null=null,gameDispose:(()=>void)|null=null,entering=false;
  let minutes:5|10|15=5;
  const clear=()=>{gameDispose?.();gameDispose=null;setupDispose?.();setupDispose=null;};
  const home=()=>{
    if(disposed)return;clear();
    document.title='Focus Hiking · 眼动徒步';
    parent.innerHTML='<main class="hike-landing"><section class="hike-home-copy"><a class="brand" href="/">FOCUS <span>HIKING</span></a><p class="eyebrow">A QUIET WALK IN THE WOODS</p><h1>让目光，<br>带你走进林间。</h1><p>沿着目光的方向，缓缓前进。<br>视线离开屏幕时，停下脚步；回来后继续晴天漫步。</p><fieldset class="hike-duration"><legend>给自己留一点时间</legend><label><input type="radio" name="duration" value="5" checked>5 分钟</label><label><input type="radio" name="duration" value="10">10 分钟</label><label><input type="radio" name="duration" value="15">15 分钟</label></fieldset><button class="primary" id="hike-setup">校准并开始</button><p class="hike-note">首次开始需开启摄像头，完成屏内位置与屏幕内外校准。校准期间不计时。体验记录只保存在本浏览器。</p><a href="/?mode=explore" style="color:#d6e0ca">先用鼠标与键盘看看森林</a><details><summary>我的体验存档</summary><div class="hike-home-archive"></div></details></section></main>';
    parent.querySelector<HTMLInputElement>(`input[value="${minutes}"]`)!.checked=true;
    renderArchive(parent.querySelector<HTMLElement>('.hike-home-archive')!,archive);
    parent.querySelector<HTMLButtonElement>('#hike-setup')!.onclick=()=>{minutes=Number(parent.querySelector<HTMLInputElement>('input[name="duration"]:checked')!.value) as 5|10|15;setup();};
  };
  const setup=()=>{
    clear();const calibration=document.createElement('div'),scene=document.createElement('div');calibration.className='gaze-session-layer';scene.className='gaze-session-layer gaze-scene-root';scene.hidden=true;parent.replaceChildren(calibration,scene);
    const enter=(camera:CameraAttention)=>{
      if(entering||disposed||!camera.interactionReady)return;entering=true;
      try {
        calibration.hidden=true;scene.hidden=false;
        const game=mountHikeGame(scene,camera,{minutes,archive,isReady:()=>camera.interactionReady,onExit:home,onRecalibrate:()=>{
          gameDispose?.();gameDispose=null;camera.setInteractionEnabled(false);scene.hidden=true;calibration.hidden=false;
        }});
        if(camera.unverifiedEntry){const note=document.createElement('p');note.className='gaze-unverified-notice';note.textContent='体验模式 · 验证未达标或未验证，方向与离屏判断可能不准。';scene.append(note);}
        gameDispose=()=>game.dispose();camera.setInteractionEnabled(true);
      }catch(error){scene.hidden=true;calibration.hidden=false;const status=calibration.querySelector('.gaze-status');if(status)status.textContent=error instanceof Error?error.message:'暂时无法进入森林，请重试';}
      finally{entering=false;}
    };
    setupDispose=mountGazeTest(calibration,{onSceneReady:enter});
    const title=calibration.querySelector('.gaze-intro h1');if(title)title.textContent=`准备 ${minutes} 分钟的林间徒步`;
    const enterButton=calibration.querySelector<HTMLButtonElement>('[data-action="scene"]');if(enterButton)enterButton.textContent='校准完成，进入徒步';
    const back=document.createElement('button');back.className='hike-setup-back';back.textContent='返回首页';back.onclick=home;calibration.append(back);
  };
  home();return ()=>{if(disposed)return;disposed=true;clear();parent.replaceChildren();};
}
