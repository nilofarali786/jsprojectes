import React from 'react'
import { UseCard } from './contrax'
const Card = () => {
 let  {data,removetocard,addIncremntCount,decrementCount} = UseCard()
 console.log(data)
 //let newdata=data.products

  return<>
    <div className='bg-gray-50 w-[80%] m-auto mt-10'>
     <div>
     <h1 className='text-2xl pl-6 pt-6 font-extrabold pb-10'>Old Summery</h1>
       {data.map((item)=><div key={item.id} className='flex justify-between items-center px-4 gap-8'>
         <img src={item.product.image} width={200} ></img>
         <div>
          <p>{item.product.description}</p>
          <b className='text-blue-600'>${item.product.price}</b>
         </div>
          <div className='flex justify-between items-center gap-1'>
         <button className='w-6 h-6 border-2 mt-[-2] text-center' onClick={()=>addIncremntCount(item)}>+</button>{item.qut}<button className='w-6 h-6 border-2 mt-[-2]' onClick={()=>decrementCount(item)}>-</button>

       </div>
        <button className='bg-blue-600 p-2 text-white' onClick={()=>removetocard(item)}>Remove</button>


       </div>)}


     </div>



    </div>
    </>
}

export default Card