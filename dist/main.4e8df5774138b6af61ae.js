(self.webpackChunkcalculator_in_react=self.webpackChunkcalculator_in_react||[]).push([[179],{5579:(e,t,r)=>{"use strict";var n=r(1919),a=r(7294),u=r(3935);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,u=void 0;try{for(var c,o=e[Symbol.iterator]();!(n=(c=o.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==o.return||o.return()}finally{if(a)throw u}}return r}}(e,t)||function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}e=r.hmd(e),(0,n.setLogLevel)("error");var l=[{name:"AC",id:"clear",style:"keyboard__button_clear",key:"AC"},{name:"%",id:"perc",style:"keyboard__button_perc",key:"%"},{name:"/",id:"divide",style:"keyboard__button_divide",key:"/"},{name:"x",id:"multiply",style:"keyboard__button_multiply",key:"*"},{name:"-",id:"subtract",style:"keyboard__button_subtract",key:"-"},{name:"+",id:"add",style:"keyboard__button_add",key:"+"},{name:"=",id:"equals",style:"keyboard__button_equals",key:"="},{name:9,id:"nine",style:"",key:"9"},{name:8,id:"eight",style:"",key:"8"},{name:7,id:"seven",style:"",key:"7"},{name:6,id:"six",style:"",key:"6"},{name:5,id:"five",style:"",key:"5"},{name:4,id:"four",style:"",key:"4"},{name:3,id:"three",style:"",key:"3"},{name:2,id:"two",style:"",key:"2"},{name:1,id:"one",style:"",key:"1"},{name:0,id:"zero",style:"",key:"0"},{name:".",id:"decimal",style:"",key:"."}],i={"/":function(e,t){return e/t},"*":function(e,t){return e*t},"-":function(e,t){return e-t},"+":function(e,t){return e+t},"=":function(e,t){return e}};function y(e){var t=e.output,r=c(a.useState(null),2),n=r[0],u=r[1],o=a.useRef(""),y=a.useRef(""),s=a.useRef(0);return a.createElement("main",{className:"claculator__keyboard keyboard"},l.map((function(e){return a.createElement("button",{key:e.key,id:e.id,type:"button",name:e.key,className:"keyboard__button ".concat(e.style," ").concat(n==e.key?"selected":""),onClick:function(e){return c=e.target.name,/[0-9|\.]/.test(c)&&("0"==(a=c)&&0==y.current.length||y.current.includes(".")&&"."==a||t(y.current+=a)),/[\/\*\-\+]/.test(c)&&function(e){if(u(e),n&&y.current){var r=i[n](s.current,Number(y.current));t(r),s.current=r,y.current=""}else s.current+=Number(y.current),y.current="";o.current=n}(c),"="==c&&(r=/[\/\*\-\+]/.test(o.current)&&"-"===n?i[o.current](s.current,Number(-y.current)):i[n](s.current,Number(y.current)),t(r),s.current=r,y.current="",o.current=""),void("AC"===c&&(t("0"),s.current=0,y.current="",o.current="",u(null)));var r,a,c}},e.name)})))}function s(e){var t=e.sum;return a.createElement("header",{className:"claculator__screen screen"},a.createElement("div",{id:"display",className:"screen__data"},t))}function d(){var e=c(a.useState("0"),2),t=e[0],r=e[1];return a.createElement("div",{className:"claculator"},a.createElement(s,{sum:t}),a.createElement(y,{output:function(e){return r(e)}}))}u.render(a.createElement(d,null),document.getElementById("root")),e.hot.accept()}},0,[[6981,666,216],[5579,666,216]]]);