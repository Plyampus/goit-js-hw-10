import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f,i as h}from"./assets/vendor-77e16229.js";let a,o;const d={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){a=t[0],o=a-d.defaultDate,o<0?(h.error({color:"red",position:"topRight",message:"Please choose a date in the future"}),s.disabled=!1):(r.disabled=!1,s.disabled=!0)}};function p(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),u=Math.floor(t%864e5%36e5/6e4),m=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:u,seconds:m}}f("#datetime-picker",d);const s=document.querySelector("#datetime-picker"),r=document.querySelector("[data-start]"),n=document.querySelectorAll(".value");r.disabled=!0;r.addEventListener("click",t=>{const i=setInterval(()=>{if(o=a-new Date,o<0){r.disabled=!0,s.disabled=!1,clearInterval(i);return}const e=p(o);n[0].textContent=e.days.toString().padStart(2,"0"),n[1].textContent=e.hours.toString().padStart(2,"0"),n[2].textContent=e.minutes.toString().padStart(2,"0"),n[3].textContent=e.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map