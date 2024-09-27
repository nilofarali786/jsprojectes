import { useState , useEffect} from 'react'
import { IoIosStar } from "react-icons/io";
import { TiShoppingCart } from "react-icons/ti";
import Urls from '../webservices/Api'
import { Link, useSearchParams } from 'react-router-dom';
import { UseCard } from './contrax';


export default function Allproducts(){
    
     
     


    
     const [data,setData] =useState([])
     const[loding,setloding]=useState(false)
      const[search,setserach]=useSearchParams()
     let serchquery=search.get('query')
     console.log(serchquery)
     let    {addToCard} = UseCard()
     console.log(addToCard)
    let getdata=async()=>{
          setloding(true)
        let product= serchquery? await  Urls.getSingalProduct(serchquery):await Urls.getAllProducts()
      
     // console.log(product)
           setData(product)
                 setloding(false)  
      }
      
          
      
      
       useEffect(()=>{

          getdata()
         
       },[serchquery])

   if(!loding &&  !data.length &&  serchquery){

       return<>

         <div className='bg-Slate-300 m-auto w-6/12'>
         <p>Product not match</p>

         </div>


       </>






   }

return<>
{loding?<>
   <p className='text-center'>Data is loding......</p>



</>:<>

<div className='w-[80%] bg-Slate-300 m-auto'>

<div className='grid grid-cols-3 items-center justify-between gap-8 p-6'>
 {data.map((item)=><div key={item.id} className='flex flex-col justify-between items-center border-2'>
 <h1 className=' text-xl pt-5 font-semibold font-serif'>{item.category}</h1>
<img src={item.image} width={200} className='p-6' />
    <div>
<p className=' py-4'>{item.rating.rate} <span className='flex gap-1 '><IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /></span></p>
<b className=''>{item.price}</b>
<Link to={`/product/${item.id}`}><p className='text-red-600'>Getproducts</p></Link>
<Link to="/card"><button  onClick={()=>addToCard(item)}><TiShoppingCart className='text-2xl text-blue-600'  ></TiShoppingCart></button></Link>

    </div>
 </div>)}


</div>

</div>

</>}







</>








}

