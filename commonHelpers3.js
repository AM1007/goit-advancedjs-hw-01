import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l as c}from"./assets/vendor-78be7656.js";const a=document.querySelector(".feedback-form"),n="feedback-form-state",l=function(e,t){try{const o=JSON.stringify(t);localStorage.setItem(e,o)}catch(o){console.log("Set state error: ",o.message)}},s=function(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log("Get state error: ",t.message)}},i=function(e){try{localStorage.removeItem(e)}catch(t){console.log("Get state error: ",t.message)}},m=function(e){const{name:t,value:o}=e.target;try{let r=s(n);r=r||{},r[t]=o,l(n,r)}catch(r){console.log(r)}},u=c(m,500);a.addEventListener("input",u);g();function g(){const e=s(n);e&&Object.entries(e).forEach(([t,o])=>{a.elements[t].value=o})}const f=function(e){e.preventDefault();const{elements:{email:t,message:o}}=e.currentTarget;console.log({email:t.value,message:o.value}),e.currentTarget.reset(),i(n)};a.addEventListener("submit",f);
//# sourceMappingURL=commonHelpers3.js.map