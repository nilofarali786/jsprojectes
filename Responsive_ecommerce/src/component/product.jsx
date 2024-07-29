import { CiHeart } from "react-icons/ci";
import React, { useRef, useState } from 'react'
import style from './product.module.css'
import { CiShoppingCart } from "react-icons/ci";
const Product = () => {

  let refElement=useRef()
 const [product,setProduct]=useState([
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/1.jpg",
      name: "Guipure panel blouse",
      sale: true,
      price: 35.0,
      salePrice: 31.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/2.jpg",
      name: "Buckle wrap skirt",
      sale: true,
      price: 15.0,
      salePrice: 12.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/3.jpg",
      name: "Pocket linen shirt",
      sale: false,
      price: 25.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/4.jpg",
      name: "Leather shopper bag",
      sale: false,
      price: 34.0,
    },

    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/5.jpg",
      name: "Pocket linen shirt",
      sale: false,
      price: 25.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/6.jpg",
      name: "Leather shopper bag",
      sale: false,
      price: 34.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/7.jpg",
      name: "Guipure panel blouse",
      sale: true,
      price: 35.0,
      salePrice: 31.0,
    },
    {
      img: "https://raw.githubusercontent.com/hafizjavaid/react-mini-projects-recording/e347a40201384c7c54d55929d4bc0295dd57ecfa/landingpage/public/images/8.jpg",
      name: "Buckle wrap skirt",
      sale: true,
      price: 15.0,
      salePrice: 12.0,
    },])
  return<>
<section>
<div className={style.container}>
<div className={style.product}>
{product.map((item,i)=><div className={style.card} key={i}>
<div className={style.img}>
<img src={item.img}></img>
{item.sale?<div><button className={style.btn}>sales</button></div>:""}
</div>
<div className={style.deatailes}>
<span className={style.icon}><CiHeart/></span>
<span className={style.read}>Read more</span>
<span className={style.icon2}><CiShoppingCart/></span>
</div>
<div className={style.pricecon}>
<b>{item.name}</b>
<p className={`${item.sale?style.line:style.price}`}>${item.price}</p>
{item.sale?<del className={style.saleprice}>${item.salePrice}</del>:""}
</div>

</div>)}


</div>
</div>
</section>
  </>
   

}

export default Product