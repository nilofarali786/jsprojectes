import style from './contact.module.css'
import React from 'react'
import { RiMessage2Fill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";


const Contact = () => {
  return <>
    <div className={style.title}>
         <p>Contact</p>
       <h1>Get in Touch </h1>
    </div>
<div className={style.container}>
<div className={style.contact}>
<h1>Send us message<RiMessage2Fill /></h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
<ul>
    <li><RiMessage2Fill />   import contac@nilofar.com</li>
    <li><FaPhoneAlt />       91+23456788
    </li>
    <li><FaAddressCard />     48 sumatinager</li>
</ul>

</div>
<div className={style.conform}>
<form>
<label>YOUR Name</label>
<input  type='text' name="name" placeholder='Enter your Name' required></input> 
<label>YOUR Phone</label>
<input  type='text' name="phone" placeholder='Enter your Name' required></input> 
<label>Text MSG</label>
<textarea  placeholder='Enter your address'></textarea>
<button>SUBMIT</button>

</form>


</div>


</div>

  </>
}

export default Contact