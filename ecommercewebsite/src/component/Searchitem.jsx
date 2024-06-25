import React, { useEffect, useState } from 'react'
import { items } from './Data'
import { useParams } from 'react-router-dom'
import style from './searchitem.module.css'

const Searchitem = () => {

    const {saaz}=  useParams()
    const [serachData, setSerachData]= useState([])
    useEffect(()=>{
    const data=items.filter((ob)=>ob.category.toUpperCase().includes(saaz.toUpperCase()))
           setSerachData(data)
        console.log(data)

    },[serachData])
  return<>
   <div className={style.card}>
   {serachData.map((pro)=><div className={style.box}  key={pro.id}>
 <img src={pro.imgSrc}  width={240}  height={240}></img>
  <b className={style.ti}>{pro.title}</b>
  <p className={style.dc}>{pro.description}</p>
  <div className={style.btn}>
  <button className="btn btn-primary">{pro.price}</button>
 
</div>
   </div>)}


    </div>
   
  </>
}

export default Searchitem