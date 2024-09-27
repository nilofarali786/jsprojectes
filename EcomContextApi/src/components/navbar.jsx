import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { UseCard } from "./contrax";
export default function Navbar({onsearch}){

const [search,setserch]=useState('')
     let{data}=UseCard()
//console.log(search)

let serachdata=()=>{

    if(search.length>0){

        onsearch(search.trim())
    }else
    setserch('')
}
 return<>

<div className="bg-indigo-900 text-white grid  grid-cols-3 py-5 m-auto w-full justify-between items-center px-10">

<div className="font-serif">E-commerce</div>
<div className="flex gap-2">
    <input type="text" value={search} onChange={(e)=>setserch(e.target.value)} placeholder="Enter your product" className="p-2 w-[300px] rounded-sm text-black outline-none"></input>
    <button className="text-black bg-white w-32" onClick={serachdata}>Search</button>
</div>
<div className="ml-40 text-2xl">
<sup>({data.length})</sup>
<TiShoppingCart/>
</div>
</div>

 </>







}