import { useEffect, useState } from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom';
export default function NavBar(){

   const [sticky,setsticky]=useState(false)
   useEffect(()=>{

     window.addEventListener('scroll',function(){

     this.window.scrollY >50? setsticky(true):setsticky(false)



     })





   },[])

   var [menu,setMenu]=useState(false)
    
   let toggle=()=>{
     menu?setMenu(false):setMenu(true)


   }
     console.log(menu)

   return<>
   
    
   <nav className={style.container}>

    <div className={style.logo}><img src="images.png"></img></div>
      <ul className={menu?"":style.hidden}>
        <li><Link to="home" >Home</Link></li>
        <li > <Link to="Programes">Programe</Link></li>
        <li><Link to="about" >About us</Link></li>
        <li><Link to="campus"  >Campus</Link></li>
        <li><Link to="btn"  >Testiominal</Link></li>
        <li className={style.button}><Link to="conform" >Contact Us</Link></li>
     </ul>
     <img onClick={toggle}  className={style.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///9AQEA9PT3i4uJFRUU6OjrW1tbv7+94eHjJyclTU1MtLS1XV1cyMjI1NTUsLCz5+flJSUltbW1dXV2GhoaVlZVjY2O0tLR+fn7z8/NNTU26urqMjIzc3NwnJyebm5utimepAAACXElEQVR4nO3dW3KjMBBGYS4WGCMEGGPwNfvfZYwz73mY6f6rPOfbwSkBDqIhWQYAAAAAAAAAAAAAAAAAACBXl/5qv7yhWeO48zbGtRl8AstjGwqF0B5Lj8CqC7lK6Cr7wLIrZIF5XnTmqzgcdSu4CUfrc7FppYF53jbGhat2CV+LuNoG1lF5Fm6KaPu7WI7ywtH2WlPu5IU7CimkkEIKKaSQwr8u/Pi/2i6TvHC6mBZmpyQuTCfbwKzqxIX2OzWrdhGT8Q3wSx2Ud/khOOwLl6NuFZPxhfSP+pSSYks4pHDy2tl/zOd48BbP88Op7+1SezP+GQQAAAAA4P80PCpvD6fBxHfeMj371lv/nBanyOYqGt4ruqv1yNfbLegezhThZh9YiacvzR9bDGfx9OXZ+ly89dLAPO+tj9O9fPpybxvI9KVDIdOXFFJIIYUUUkghhb8XXuWFV9vC4SwvtL5BvMunL++2gdlDfgdsPhh11w6YdtZL+DoTo3T6MjpsmdZTUl1tijS5DCcOc+gk05ddmL129utlnaK3aV0cvxsBAAAAAAA+w1A1/iq/8ctyjkXnPn3ZFXF2ec85y26jaDuxSKPDaGKWLb1w+rJf7AObp6xv8zSfob0ctI/XioP1O92L/Msf1sfp509fig/S7TA1nr7UTyowfUkhhRRSSCGFFFL4eyHTl/aF1tOXs3z6crYNzEr5/aH5ftuXePryyzrwdSYqj9Nk/pLslnhsZdOXrfn/YPmxxD4Ff6mPDrulPy7NvO69rXPDxyEBAAAAAAAAAAAAAAAAAAAAAAD+gW99k2B315zg4AAAAABJRU5ErkJggg==" width={20}></img>
   
   </nav>
   
     
     



   </>








}