import{r as g,W as j,j as e,a as f}from"./app-mmgCA6Iz.js";import{T as n,I as v}from"./TextInput-prTaTF0K.js";import{I as i}from"./InputLabel-xTYQT3Gs.js";import{P as _}from"./PrimaryButton-xAtCSncg.js";import{T as y}from"./TextArea-CxkVrxQw.js";function D({expenses:l}){const d=new Date().toLocaleString("sv-SE",{timeZoneName:"short"}).slice(0,10),c=["low","medium","high"],[m,a]=g.useState(""),{data:s,setData:r,post:u,processing:p,errors:b,reset:N,recentlySuccessful:w}=j({transaction_date:d,in_out_cat_id:0,amount:0,description:"",priority:"-"}),x=()=>s.transaction_date===""||s.in_out_cat_id===0||s.amount===0||s.priority==="-"?(a("Fill all required fileds."),!1):!0,h=t=>{t.preventDefault(),x()&&u(route("transaction.store"))};return e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Add Expense"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Fill all required fields."})]}),e.jsxs("form",{className:"mt-6 space-y-6",onSubmit:h,children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"date",value:"Date Time"}),e.jsx(n,{id:"date_time",type:"date",name:"date",value:s.transaction_date,className:"mt-1 block w-full",onChange:t=>{r("transaction_date",t.target.value),a("")}})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"expense_type",value:"Expense Type*"}),e.jsxs("select",{name:"expense_type",id:"expense_type",onChange:t=>{r("in_out_cat_id",t.target.value),a("")},className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",children:[e.jsx("option",{value:0,children:"-"}),l.map(t=>e.jsx("option",{value:t.in_out_cat_id,children:t.name},t.in_out_cat_id))]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"amount",value:"Amount (in €)*"}),e.jsx(n,{id:"amount",type:"number",name:"amount",min:0,step:.01,placeholder:0,className:"mt-1 block w-full",onChange:t=>{let o=parseFloat(t.target.value);r("amount",-Math.abs(o)),a("")}})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"description",value:"Description (optional)"}),e.jsx(y,{id:"description",className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",value:s.description,onChange:t=>{r("description",t.target.value),a("")}})]}),e.jsxs("div",{children:[e.jsx(i,{htmlFor:"priority",value:"Priority*"}),e.jsxs("select",{name:"priority",id:"priority",onChange:t=>{r("priority",t.target.value),a("")},className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",children:[e.jsx("option",{value:"-",children:"-"}),c.map((t,o)=>e.jsx("option",{value:t,children:t},o))]})]}),e.jsx(v,{className:"mt-2",message:m}),e.jsxs("div",{className:"mt-4 text-right gap-4",children:[e.jsx(f,{href:route("transaction.index"),children:"Cancel"}),e.jsx(_,{className:"ms-4",disabled:p,children:"Add Expense"})]})]})]})}export{D as default};
