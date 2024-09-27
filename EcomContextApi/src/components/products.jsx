import { useEffect, useState } from "react"
import Urls from '../webservices/Api'
import { useParams } from "react-router-dom"
import { TiShoppingCart } from "react-icons/ti";
import { UseCard } from "./contrax";



export default function Products(){
          let {addToCard} =   UseCard()
const [data,setData]=useState([])
const [loding,setLoading]=useState(false)

 let {productId} = useParams()
 console.log(productId)

 

   useEffect(()=>{

      let getdata = async () => {

         setLoading(true)
         const result=await Urls.productget(productId)
         console.log(result)
         setData([result])

      }
       // Call the function and handle any errors
       getdata().catch(console.error)  
       
      
    console.log(data)
   },[productId])

   if(!loding && !data){

     return<>
    <div>Product is not found</div>


     </>


   }

 return<>
  <div className=" w-[60%] m-auto mt-10">
    {data.map((item)=><div className="flex justify-between items-center gap-5">
      <img src={item.image} width={300} className="z-9"></img>
        <div className=" flex flex-col  justify-between gap-5">
        <h3 className="text-xl font-bold">{item.title}</h3>
        <p>{item.description}</p>
        <div className=" flex justify-between items-center">
        <b>$Rs.{item.price}</b>
        <button onClick={()=>addToCard(item)}><TiShoppingCart className='text-3xl text-blue-900'></TiShoppingCart></button>
        </div>

</div>
    </div>)}

  </div>

 </>








}