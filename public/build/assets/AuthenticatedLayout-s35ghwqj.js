import{r as d,j as e,a as l,q as g}from"./app-mmgCA6Iz.js";import{z as p}from"./transition-Dc0oLwLz.js";const h=d.createContext(),i=({children:s})=>{const[r,t]=d.useState(!1),n=()=>{t(o=>!o)};return e.jsx(h.Provider,{value:{open:r,setOpen:t,toggleOpen:n},children:e.jsx("div",{className:"relative",children:s})})},f=({children:s})=>{const{open:r,setOpen:t,toggleOpen:n}=d.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:n,children:s}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>t(!1)})]})},j=({align:s="right",width:r="48",contentClasses:t="py-1 bg-white",children:n})=>{const{open:o,setOpen:c}=d.useContext(h);let x="origin-top";s==="left"?x="ltr:origin-top-left rtl:origin-top-right start-0":s==="right"&&(x="ltr:origin-top-right rtl:origin-top-left end-0");let m="";return r==="48"&&(m="w-48"),e.jsx(e.Fragment,{children:e.jsx(p,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${m}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+t,children:n})})})})},b=({className:s="",children:r,...t})=>e.jsx(l,{...t,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:bg-gray-100 focus:outline-none "+s,children:r});i.Trigger=f;i.Content=j;i.Link=b;function u({active:s=!1,className:r="",children:t,...n}){return e.jsx(l,{...n,className:"inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(s?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700")+r,children:t})}function a({active:s=!1,className:r="",children:t,...n}){return e.jsx(l,{...n,className:`flex w-full items-start border-l-4 py-2 pe-4 ps-3 ${s?"border-indigo-400 bg-indigo-50 text-indigo-700 focus:border-indigo-700 focus:bg-indigo-100 focus:text-indigo-800":"border-transparent text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800 focus:border-gray-300 focus:bg-gray-50 focus:text-gray-800"} text-base font-medium transition duration-150 ease-in-out focus:outline-none ${r}`,children:t})}function N({header:s,children:r}){const t=g().props.auth.user,[n,o]=d.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"border-b border-gray-100 bg-white",children:[e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex h-16 justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"flex shrink-0 items-center",children:e.jsx(l,{href:"/",children:"$$$-app"})}),e.jsxs("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:[e.jsx(u,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(u,{href:route("transaction.index"),active:route().current("transaction.index"),children:"Transactions"}),e.jsx(u,{href:route("budget.index"),active:route().current("budget.index"),children:"Budgets"})]})]}),e.jsx("div",{className:"hidden sm:ms-6 sm:flex sm:items-center",children:e.jsx("div",{className:"relative ms-3",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center rounded-md border border-transparent bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none",children:[t.name,e.jsx("svg",{className:"-me-0.5 ms-2 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(c=>!c),className:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(n?"block":"hidden")+" sm:hidden",children:[e.jsxs("div",{className:"space-y-1 pb-3 pt-2",children:[e.jsx(a,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e.jsx(a,{href:route("transaction.index"),active:route().current("transaction.index"),children:"Transactions"}),e.jsx(a,{href:route("budget.index"),active:route().current("budget.index"),children:"Budgets"})]}),e.jsxs("div",{className:"border-t border-gray-200 pb-1 pt-4",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"text-base font-medium text-gray-800",children:t.name}),e.jsx("div",{className:"text-sm font-medium text-gray-500",children:t.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(a,{href:route("profile.edit"),children:"Profile"}),e.jsx(a,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),s&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8",children:s})}),e.jsx("main",{children:r})]})}export{N as A};
