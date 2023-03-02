(function(){"use strict";var e={826:function(e,t,n){var o=n(9242),r=n(3396);function a(e,t){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}var l=n(89);const u={},i=(0,l.Z)(u,[["render",a]]);var s=i,c=n(2483),f=n(4870),h=n(7139);const d={class:"container"},p=(0,r._)("h3",null,"All Users",-1),v={class:"container"},m={class:"table"},w=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"First Name"),(0,r._)("th",null,"Last Name"),(0,r._)("th",null,"Email Id"),(0,r._)("th",null,"Update"),(0,r._)("th",null,"Delete")])],-1),b={class:"btn btn-warning"},g=["onClick"],_={class:"row"},k={class:"form-group"},y=(0,r._)("label",null,"First Name",-1),j=["value"],O={class:"form-group"},E=(0,r._)("label",null,"Last Name",-1),T=["value"],C={class:"form-group"},S=(0,r._)("label",null,"Email Id",-1),U=["value"];var N={__name:"UsersView",setup(e){const t=(0,c.yj)();let n=(0,f.iH)(void 0),a=(0,f.iH)(!1),l=(t.query.id,(0,f.iH)("")),u=(0,f.iH)(""),i=(0,f.iH)("");(0,r.bv)((()=>{fetch("http://localhost/api").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),n.value=e,a.value=!1})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))}));const s=e=>{fetch("http://localhost/api?id="+e,{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),e.success?alert("Data was deleted"):e.success||alert("Could not delete data"),fetch("http://localhost/api").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),n.value=e})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))},N=()=>{const e={first_name:l.value,last_name:u.value,email_id:i.value};console.log(e),fetch("http://localhost/api",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),l.value="",u.value="",i.value="",a.value=!1,fetch("http://localhost/api").then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e),n.value=e})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))})).catch((e=>{console.error("There was a problem with the fetch operation:",e)}))};return(e,t)=>{const c=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("div",d,[p,(0,r._)("div",v,[(0,r._)("table",m,[w,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)((0,f.SU)(n),(e=>((0,r.wg)(),(0,r.iD)("tr",{key:e.id},[(0,r._)("td",null,(0,h.zw)(e.first_name),1),(0,r._)("td",null,(0,h.zw)(e.last_name),1),(0,r._)("td",null,(0,h.zw)(e.email_id),1),(0,r._)("td",null,[(0,r._)("button",b,[(0,r.Wm)(c,{to:{path:"/users/"+e.id}},{default:(0,r.w5)((()=>[(0,r.Uk)("Update ")])),_:2},1032,["to"])])]),(0,r._)("td",null,[(0,r._)("button",{class:"btn btn-danger",onClick:t=>s(e.id)}," Delete ",8,g)])])))),128))])]),(0,r._)("div",_,[(0,r._)("button",{class:"btn btn-success",onClick:t[0]||(t[0]=e=>(0,f.dq)(a)?a.value=!0:a=!0)},"Add")])]),(0,f.SU)(a)?((0,r.wg)(),(0,r.iD)("form",{key:0,onSubmit:t[5]||(t[5]=(0,o.iM)((()=>{}),["prevent"]))},[(0,r._)("fieldset",k,[y,(0,r._)("input",{type:"text",class:"form-control",required:"",value:(0,f.SU)(l),onInput:t[1]||(t[1]=e=>(0,f.dq)(l)?l.value=e.target.value:l=e.target.value)},null,40,j)]),(0,r._)("fieldset",O,[E,(0,r._)("input",{type:"text",class:"form-control",required:"",value:(0,f.SU)(u),onInput:t[2]||(t[2]=e=>(0,f.dq)(u)?u.value=e.target.value:u=e.target.value)},null,40,T)]),(0,r._)("fieldset",C,[S,(0,r._)("input",{type:"text",class:"form-control",required:"",value:(0,f.SU)(i),onInput:t[3]||(t[3]=e=>(0,f.dq)(i)?i.value=e.target.value:i=e.target.value)},null,40,U)]),(0,r._)("button",{class:"btn btn-success",onClick:t[4]||(t[4]=e=>N())},"Save")],32)):(0,r.kq)("",!0)])}}};const q=N;var D=q;const H=(0,r._)("h1",null,"Check out our Users",-1);function P(e,t){const n=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[H,(0,r.Wm)(n,{to:{path:"/users"}},{default:(0,r.w5)((()=>[(0,r.Uk)("Click here")])),_:1})],64)}const x={},A=(0,l.Z)(x,[["render",P]]);var I=A;const L=[{path:"/",name:"Home",component:I},{path:"/users",name:"Users",component:D},{path:"/users/:id",name:"User",component:()=>n.e(443).then(n.bind(n,5793))}],F=(0,c.p7)({history:(0,c.PO)("/"),routes:L});var M=F;(0,o.ri)(s).use(M).mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,o,r,a){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var u=!0,i=0;i<o.length;i++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[i])}))?o.splice(i--,1):(u=!1,a<l&&(l=a));if(u){e.splice(c--,1);var s=r();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.229d1899.js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="user-management:";n.l=function(o,r,a,l){if(e[o])e[o].push(r);else{var u,i;if(void 0!==a)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var f=s[c];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==t+a){u=f;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+a),u.src=o),e[o]=[r];var h=function(t,n){u.onerror=u.onload=null,clearTimeout(d);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(h.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=h.bind(null,u.onerror),u.onload=h.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var l=n.p+n.u(t),u=new Error,i=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+l+")",u.name="ChunkLoadError",u.type=a,u.request=l,r[1](u)}};n.l(l,i,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,l=o[0],u=o[1],i=o[2],s=0;if(l.some((function(t){return 0!==e[t]}))){for(r in u)n.o(u,r)&&(n.m[r]=u[r]);if(i)var c=i(n)}for(t&&t(o);s<l.length;s++)a=l[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},o=self["webpackChunkuser_management"]=self["webpackChunkuser_management"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(826)}));o=n.O(o)})();
//# sourceMappingURL=app.e0509065.js.map