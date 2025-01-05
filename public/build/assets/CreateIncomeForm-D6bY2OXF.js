import{r as g,W as j,j as e,a as f}from"./app-Bcjag9SP.js";import{T as i,I as v}from"./TextInput-CjN8z5yG.js";import{I as o}from"./InputLabel-DDc-Uj0-.js";import{P as _}from"./PrimaryButton-kKCTQyS8.js";import{T as y}from"./TextArea-CHu1N-Fv.js";function k({incomes:n}){const l=new Date().toLocaleString("sv-SE",{timeZoneName:"short"}).slice(0,10),d=["low","medium","high"],[c,s]=g.useState(""),{data:a,setData:r,post:m,processing:u,errors:N,reset:b,recentlySuccessful:w}=j({transaction_date:l,in_out_cat_id:0,amount:0,description:"",priority:"-"}),p=()=>a.transaction_date===""||a.in_out_cat_id===0||a.amount===0||a.priority==="-"?(s("Fill all required fileds."),!1):!0,x=t=>{t.preventDefault(),p()&&(console.log(a),m(route("transaction.store")))};return e.jsxs("section",{className:"max-w-xl",children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Add Income"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Fill all required fields."})]}),e.jsxs("form",{className:"mt-6 space-y-6",onSubmit:x,children:[e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"date",value:"Date Time"}),e.jsx(i,{id:"date",type:"date",name:"date",value:a.transaction_date,className:"mt-1 block w-full",onChange:t=>{r("transaction_date",t.target.value),s("")}})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"income_type",value:"Income Type*"}),e.jsxs("select",{name:"income_type",id:"income_type",onChange:t=>{r("in_out_cat_id",t.target.value),s("")},className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",children:[e.jsx("option",{value:0,children:"-"}),n.map(t=>e.jsx("option",{value:t.in_out_cat_id,children:t.name},t.in_out_cat_id))]})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"amount",value:"Amount (in €)*"}),e.jsx(i,{id:"amount",type:"number",name:"amount",min:0,step:.01,placeholder:0,className:"mt-1 block w-full",onChange:t=>{r("amount",t.target.value),s("")}})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(o,{htmlFor:"description",value:"Description (optional)"}),e.jsx(y,{id:"description",className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",value:a.description,onChange:t=>{r("description",t.target.value),s("")}})]}),e.jsxs("div",{children:[e.jsx(o,{htmlFor:"priority",value:"Priority*"}),e.jsxs("select",{name:"priority",id:"priority",onChange:t=>{r("priority",t.target.value),s("")},className:"rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 mt-1 block w-full",children:[e.jsx("option",{value:"-",children:"-"}),d.map((t,h)=>e.jsx("option",{value:t,children:t},h))]})]}),e.jsx(v,{className:"mt-2",message:c}),e.jsxs("div",{className:"mt-4 text-right gap-4",children:[e.jsx(f,{href:route("transaction.index"),children:"Cancel"}),e.jsx(_,{className:"ms-4",disabled:u,children:"Add Income"})]})]})]})}export{k as default};
