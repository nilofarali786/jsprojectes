import React, { useState } from 'react'
import style from './product.module.css'
//import { items } from './Data'
import { Link } from 'react-router-dom'

const Product = ({data ,cards,setcard}) => {
   const   [item,Setitem]=useState(data)

   var addtocard=(product)=>{

    setcard([...cards,{...product,q:1}])
   }
  return <>
    <div className={style.card}>
   {data.map((pro)=><div className={style.box}  key={pro.id}>
  <Link to={`/product/ ${pro.id}`}> <img src={pro.imgSrc}  width={240}  height={240}></img></Link>
  <b className={style.ti}>{pro.title}</b>
  <p className={style.dc}>{pro.description}</p>
  <div className={style.btn}>
  <button className="btn btn-primary">{pro.price}</button>
  <button className="btn btn-success" onClick={()=>addtocard(pro)}>Add to cart</button>
</div>
   </div>)}


    </div>
  </>
}

export default Product