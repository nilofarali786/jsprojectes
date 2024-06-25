import React, { useState } from 'react'
import { items } from './Data'
import { LiaQuinscape } from 'react-icons/lia'

const Card = ({cards ,setcard}) => {
const [quntity,setquntity]= useState(0)


  var increment=(qun)=>{
    
   let incre=cards.map((data)=>data==qun?{...data,q:data.q+1}:data) 
        setcard(incre)
  }

  var dcrement=(qun)=>{
    let incre=cards.map((data)=>data==qun && data.q>1?{...data,q:data.q-1}:data) 
    setcard(incre)
  }
  
  return <>
  {cards.length==0?<><h1>card is empty</h1>
  
  
   </> :<>
   <button>clearcard</button>
   <table className='table table-light'  width={100}>
<thead>
<tr>
<th>S.NO</th>
<th>Title</th>
<th>Description</th>
<th>IMAGES</th>
<th>productPRICR</th>
<th>quntity</th>
<th>total</th>
</tr>
</thead>
<tbody>

  {cards.map((citem,i)=><tr key={citem.id}>
  
   <td>{i+1}</td>
   <td>{citem.title}</td>
   <td>{citem.description}</td>
   <td><img src={citem.imgSrc} width={100} height={100}></img></td>
   <td>{citem.price}</td>
   <td><button className='btn btn-sm btn-success' onClick={()=>increment(citem)} width={30}>increment</button>{citem.q}
   <button className='btn btn-sm btn-danger' onClick={()=>dcrement(citem)} width={30}>Decrement</button></td>
<td>{citem.q*citem.price}</td>
  </tr>

  )}
</tbody>


    </table>
    <button  onClick={()=>setcard("")} className='btn btn-warning'> card is empty</button> 
</>  }
    </>
}

export default Card