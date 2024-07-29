import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import style from './navbar.module.css'
import { TbLayoutNavbar } from "react-icons/tb";
function Navbar() {

   let [show, setshow]=useState(false)
var nav =()=>{


  setshow(true)

}
  console.log(show)
  return<>
 <nav>
<div className={ style.container}>
<div>Nilofar</div>
<div className={show?style.newlist:""}>
<ul>
  <li>Home</li>
  <li>Shop</li>
  <li>Blog</li>
  <li>Admin</li>
</ul>
</div>
<div className={style.icon}>
<div className={style.icons}>
<CiSearch />

</div>
<div className={style.icons}>
<CiHeart /><span className={style.num}>4</span>
</div>
<div className={style.icons}>
<CiShoppingCart/><span className={style.num}>4</span>
</div>

</div>
<div className={style.hidden} onClick={nav}><TbLayoutNavbar/></div>
</div>
 </nav>
  </>
   

}

export default Navbar