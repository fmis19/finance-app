import{j as e,a as i,Y as r}from"./app-DurcBAKU.js";import{P as l}from"./PrimaryButton-G8im4KFL.js";import{T as m}from"./TableView-Cxifiqb0.js";import{A as n}from"./AuthenticatedLayout-l9_UURr8.js";import"./clsx-B-dksMZM.js";import"./styled-DEh52wLH.js";import"./disabled-DnwG64bf.js";import"./transition-CRFsa1TK.js";function f({transactions:s,success:t}){let a=null;return s.length!==0&&(a=Object.keys(s[0])),e.jsxs(n,{header:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("h2",{className:"text-xl font-semibold leading-tight text-gray-800",children:"Transactions"}),e.jsx(i,{href:route("transaction.create"),children:e.jsx(l,{className:"ms-4",children:"Add Transaction"})})]}),children:[e.jsx(r,{title:"Transactions"}),t&&e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx("div",{className:"bg-emerald-500 py-2 px-4 text-white rounded mb-4",children:t})})}),e.jsx("div",{className:"py-12",children:e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:a?e.jsx(m,{tableType:"transaction",columnNames:a,rows:s}):"No Transactions"})})]})}export{f as default};