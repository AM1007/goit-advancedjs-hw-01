import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{l}from"./assets/vendor-78be7656.js";const n=document.querySelector(".feedback-form"),a="feedback-form-state",i=function(e,t){try{const r=JSON.stringify(t);localStorage.setItem(e,r)}catch(r){console.log("Set state error: ",r.message)}},c=function(e){try{const t=localStorage.getItem(e);return t===null?void 0:JSON.parse(t)}catch(t){console.log("Get state error: ",t.message)}},m=function(e){try{localStorage.removeItem(e)}catch(t){console.log("Get state error: ",t.message)}},u=function(e){const{name:t,value:r}=e.target;try{let o=c(a);o=o||{},o[t]=r,i(a,o)}catch(o){console.log(o)}},f=l(u,500);n.addEventListener("input",f);function g(){const e=c(a);e&&Object.entries(e).forEach(([t,r])=>{n.elements[t].value=r})}g();const d=function(e){e.preventDefault();const{elements:{email:t,message:r}}=e.currentTarget,o=t.value.trim(),s=r.value.trim();o!==""&&s!==""?(console.log({email:o,message:s}),e.currentTarget.reset(),m(a)):alert("Please complete both fields before submitting the form.")};n.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers3.js.map