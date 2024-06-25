import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data'
import { useState } from 'react'

import style from './productDetailes.module.css'
const Deatiles = () => {

  const {id}=useParams()
  const [product,setProduct]= useState()
  const [cat, setCat]=useState([])
       
     
       useEffect(()=>{

         const filterProducts=items.filter((pro)=>pro.id == id)
         //console.log(filterProducts)
          setProduct(filterProducts)

          const cat=items.filter((caty)=> caty.category === product.category)
        
          console.log(cat)
     

     },[id,product.category])
     
    
  return<>
    <div>
    {product.map(p=><div key={p.id} className={style.imgContainer}>
     <img src={p.imgSrc} width={200}></img>
     <b className={p.ti}>{p.title}</b>
  <p className={p.dc}>{p.description}</p>
  <button className="btn btn-primary">{p.price}</button>


    </div>)}


    </div>


</>
  
}

export default Deatiles