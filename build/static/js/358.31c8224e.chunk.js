"use strict";(self.webpackChunkadmin_dashboard_template_dashwind=self.webpackChunkadmin_dashboard_template_dashwind||[]).push([[358],{68:(e,t,a)=>{a.d(t,{A:()=>l});var s=a(579);const r=function(e){let{styleClass:t,children:a}=e;return(0,s.jsx)("div",{className:"text-xl font-semibold ".concat(t),children:a})};const l=function(e){let{title:t,children:a,topMargin:l,TopSideButtons:n}=e;return(0,s.jsxs)("div",{className:"card w-full p-6 bg-base-100 shadow-xl "+(l||"mt-6"),children:[(0,s.jsxs)(r,{styleClass:n?"inline-block":"",children:[t,n&&(0,s.jsx)("div",{className:"inline-block float-right",children:n})]}),(0,s.jsx)("div",{className:"divider mt-2"}),(0,s.jsx)("div",{className:"h-full w-full pb-6 bg-base-100",children:a})]})}},9061:(e,t,a)=>{a.d(t,{A:()=>r});a(5043);var s=a(579);const r=function(e){let{searchText:t,styleClass:a,placeholderText:r,setSearchText:l}=e;return(0,s.jsx)("div",{className:"inline-block "+a,children:(0,s.jsx)("div",{className:"input-group  relative flex flex-wrap items-stretch w-full ",children:(0,s.jsx)("input",{type:"search",value:t,placeholder:r||"Search",onChange:e=>{return t=e.target.value,void l(t);var t},className:"input input-sm input-bordered  w-full max-w-xs"})})})}},6461:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);const s=a.p+"static/media/loading.98d4ebe865b4469bcae5.gif";var r=a(579);const l=()=>(0,r.jsx)("div",{id:"loading",children:(0,r.jsx)("img",{src:s,alt:"loading",width:100})})},2599:(e,t,a)=>{a.d(t,{e:()=>l});a(5043);var s=a(9135),r=a(579);const l=e=>{let{data:t,handleChange:a,page:l}=e;return(0,r.jsx)("div",{className:"pagination",children:(0,r.jsx)(s.A,{count:t.result?t.metaData.totalPage:0,page:l,color:"primary",onChange:a})})}},2705:(e,t,a)=>{a.d(t,{d:()=>r});var s=a(579);const r=e=>{const t=()=>e?(0,s.jsx)("div",{className:"badge badge-success",children:"Verified"}):(0,s.jsx)("div",{className:"badge badge-warning",children:"Unverified"});return(0,s.jsx)(t,{})}},94:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var s=a(9456),r=a(5043),l=a(8379),n=a(68),c=a(4939),i=a(6461),d=a(5475),o=a(9531),h=a(9248),m=a(2599),x=a(2705),u=a(9061),j=a(5071),b=a(5298),g=a(579);const p=()=>{const e=(0,s.wA)(),[t,a]=(0,r.useState)(1),[l,p]=(0,r.useState)(""),f=(0,s.d4)((e=>{let{membersState:t}=e;return t.members.data})),v=(0,s.d4)((e=>{let{membersState:t}=e;return t.members.isLoading}));(0,r.useEffect)((()=>{e((0,c.EW)(t,l)).then().catch((e=>{console.log(e)}))}),[e,t,l]);return(0,g.jsx)(g.Fragment,{children:(0,g.jsx)(n.A,{title:"Data Member",topMargin:"mt-2",TopSideButtons:(0,g.jsx)(u.A,{placeholderText:"Cari Nama Rider",setSearchText:e=>p(e)}),children:v?(0,g.jsx)(i.A,{}):(0,g.jsxs)("div",{className:"overflow-x-auto w-full",children:[(0,g.jsxs)("table",{className:"table table-zebra w-full",children:[(0,g.jsx)("thead",{children:(0,g.jsxs)("tr",{children:[(0,g.jsx)("th",{children:"No"}),(0,g.jsx)("th",{children:"Tanggal"}),(0,g.jsx)("th",{children:"Data Rider"}),(0,g.jsx)("th",{children:"Email"}),(0,g.jsx)("th",{children:"Data Orang Tua"}),(0,g.jsx)("th",{children:"Alamat"}),(0,g.jsx)("th",{children:"Status"}),(0,g.jsx)("th",{})]})}),(0,g.jsx)("tbody",{children:f.result?f.result.map(((e,t)=>(0,g.jsxs)("tr",{children:[(0,g.jsx)("td",{children:t+1}),(0,g.jsx)("td",{children:e.createdAt}),(0,g.jsx)("td",{children:(0,g.jsx)("div",{className:"flex items-center space-x-3",children:(0,g.jsxs)("div",{children:[(0,g.jsx)("div",{className:"font-bold",children:e.fullname}),(0,g.jsx)("div",{className:"text-sm opacity-50",children:e.nickname}),(0,g.jsx)("div",{className:"text-sm opacity-50",children:e.categoryRace}),(0,g.jsx)("div",{className:"text-sm opacity-50",children:e.memberId})]})})}),(0,g.jsx)("td",{children:e.email}),(0,g.jsxs)("td",{children:[(0,g.jsxs)("div",{className:"text-sm",children:["Ayah: ",e.fatherName," ",(0,g.jsx)("br",{}),"HP:",(0,g.jsxs)("a",{href:(0,j.u7)(e.fatherPhone),target:"_blank",rel:"noreferrer",children:[(0,g.jsx)(b.A,{className:"w-5",color:"green"})," ",e.fatherPhone]})]}),(0,g.jsxs)("div",{className:"text-sm",children:[" Ibu: ",e.motherName," ",(0,g.jsx)("br",{}),"HP:",(0,g.jsxs)("a",{href:(0,j.u7)(e.motherPhone),target:"_blank",rel:"noreferrer",children:[(0,g.jsx)(b.A,{className:"w-5",color:"green"})," ",e.motherPhone," "]})]})]}),(0,g.jsx)("td",{children:e.address}),(0,g.jsx)("td",{children:(0,x.d)(e.status)}),(0,g.jsxs)("td",{children:[(0,g.jsx)(d.N_,{to:"".concat(e.id,"/update"),children:(0,g.jsx)("button",{className:"btn btn-square btn-ghost",children:(0,g.jsx)(o.A,{className:"w-5",color:"blue"})})}),(0,g.jsx)("button",{className:"btn btn-square btn-ghost",children:(0,g.jsx)(h.A,{className:"w-5",color:"red"})})]})]},t))):(0,g.jsx)("tr",{children:(0,g.jsx)("td",{colSpan:7,align:"center",children:"DATA TIDAK DITEMUKAN"})})})]}),(0,g.jsx)(m.e,{data:f,handleChange:(t,s)=>{a(s),e((0,c.EW)(s,l)).then()},page:t})]})})})},f=()=>{const e=(0,s.wA)();return(0,r.useEffect)((()=>{e((0,l.wE)({title:"Daftar Member"}))}),[e]),(0,g.jsx)(p,{})}},5071:(e,t,a)=>{a.d(t,{Iq:()=>c,M6:()=>l,X4:()=>d,cd:()=>i,u7:()=>n});var s=a(3507),r=a(579);const l=e=>{e.target.src=s};function n(e){return"https://wa.me/".concat(function(e){let t=e;if(!e||""===e)return"";e=e.replace(/ /g,"").replace(/\(/g,"").replace(/\)/g,"").replace(/\./g,"").replace(/-/g,"").replace(/\+/g,""),t=/[^+0-9]/.test(e.trim())?"":e.trim().startsWith("+62")?e.trim():e.trim().startsWith("0")?"62"+e.trim().substring(2):e.trim().startsWith("8")?"628"+e.trim().substring(2):e;return t}(e),"?text=").concat("Hallo Maparace,")}const c=e=>e?"Telah Diverifikasi":"Belum Diverifikasi",i=e=>e?URL.createObjectURL(e):s,d=e=>e?(0,r.jsx)("small",{className:"badge badge-success",children:"Success"}):(0,r.jsx)("small",{className:"badge badge-error",children:"Pending"})},5298:(e,t,a)=>{a.d(t,{A:()=>l});a(5043);var s=a(6734),r=a(579);const l=(0,s.A)((0,r.jsx)("path",{d:"M16.75 13.96c.25.13.41.2.46.3.06.11.04.61-.21 1.18-.2.56-1.24 1.1-1.7 1.12-.46.02-.47.36-2.96-.73-2.49-1.09-3.99-3.75-4.11-3.92-.12-.17-.96-1.38-.92-2.61.05-1.22.69-1.8.95-2.04.24-.26.51-.29.68-.26h.47c.15 0 .36-.06.55.45l.69 1.87c.06.13.1.28.01.44l-.27.41-.39.42c-.12.12-.26.25-.12.5.12.26.62 1.09 1.32 1.78.91.88 1.71 1.17 1.95 1.3.24.14.39.12.54-.04l.81-.94c.19-.25.35-.19.58-.11l1.67.88M12 2a10 10 0 0 1 10 10 10 10 0 0 1-10 10c-1.97 0-3.8-.57-5.35-1.55L2 22l1.55-4.65A9.969 9.969 0 0 1 2 12 10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 1.72.54 3.31 1.46 4.61L4.5 19.5l2.89-.96A7.95 7.95 0 0 0 12 20a8 8 0 0 0 8-8 8 8 0 0 0-8-8z"}),"WhatsApp")},3507:(e,t,a)=>{e.exports=a.p+"static/media/No-Image-Placeholder.svg.5dfb846c033fb8dcff45.webp"},9531:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(5043);const r=s.forwardRef((function(e,t){let{title:a,titleId:r,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":r},l),a?s.createElement("title",{id:r},a):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"}),s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15 12a3 3 0 11-6 0 3 3 0 016 0z"}))}))},9248:(e,t,a)=>{a.d(t,{A:()=>r});var s=a(5043);const r=s.forwardRef((function(e,t){let{title:a,titleId:r,...l}=e;return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:t,"aria-labelledby":r},l),a?s.createElement("title",{id:r},a):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"}))}))}}]);
//# sourceMappingURL=358.31c8224e.chunk.js.map