import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{P as a,l}from"./assets/vendor-78be7656.js";const n="videoplayer-current-time",s=document.querySelector("iframe"),t=new a(s),c=function(e){try{const o=JSON.stringify(e);localStorage.setItem(n,o)}catch(o){console.error("Set state error: ",o.message)}};t.on("timeupdate",l(c,1e3));const p=function(){try{const e=localStorage.getItem(n);if(JSON.parse(e)===null)return;let o=JSON.parse(e).seconds;o=t.setCurrentTime(o)}catch(e){console.error("Get state error: ",e.message)}};p();t.getVideoTitle().then(function(e){console.log("title:",e)});s.style.cssText=`position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  z-index: 10`;s.insertAdjacentHTML("afterend",`<iframe
      id="vimeo-reflection"
      src="https://player.vimeo.com/video/878916453?autopause=false"
      width="640"
      height="360"
      frameborder="0"
      allowfullscreen
      allow="autoplay; encrypted-media"
    ></iframe>`);const i=document.querySelector("#vimeo-reflection"),r=new a(i);i.style.cssText=`position: absolute;
top: -20%;
left: -20%;
width: 150%;
height: 150%;
opacity: 0.5;
 `;r.setMuted(!0);t.setAutopause(!1);s.focus();t.on("play",()=>{t.getCurrentTime().then(e=>{r.setCurrentTime(e)}),r.play()});t.on("pause",()=>{r.pause()});
//# sourceMappingURL=commonHelpers2.js.map
