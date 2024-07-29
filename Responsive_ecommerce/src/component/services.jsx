import React from 'react'
import { useState } from 'react'
import style from './services.module.css'
import { CiDeliveryTruck } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlinePayment } from "react-icons/md";
import { MdBrowserNotSupported } from "react-icons/md";
const Services = () => {

    const [services,setservices]=useState([
    {
      img:<CiDeliveryTruck /> ,
      name: "Free Delivery",
      text: "For all order over 99$",
    },
    {
      img: <GiReturnArrow />,
      name: "30 Days Return",
      text: "If goods have Problems",
    },
    {
      img: <MdOutlinePayment />,
      name: "Secure Payment",
      text: "100% secure payment",
    },
    {
      img: <MdBrowserNotSupported />,
      name: "24/7 Support",
      text: "Dedicated support",
    },
  ])

  return<>
<section>
<div className={style.container}>

{services.map((po,i)=><div className={style.services} key={i}>
<div className={style.img}>
 {po.img}
</div>
<div>
    <h4>{po.name}</h4>
    <p>{po.text}</p>
</div>
</div>)}




</div>

</section>
  </>
  
}

export default Services