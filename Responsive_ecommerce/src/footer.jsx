import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import style from "./footer.module.css"
export default function Footer(){




 return<>

<footer className={style.footer}>
<div className={style.footercontainer}>
<div>
<img src="https://github.com/hafizjavaid/react-mini-projects-recording/blob/Ecommerece-Landingpage-p1/landingpage/public/images/PAYMENT.jpg?raw=true"></img>
</div>
<divb className={style.nilo}>
    <div>Nilofar</div>
    <p>@Copright 2018  Nilofar</p>
    <div className={style.link}>
    <a href="#">HOME</a>
    <a href="#">SHOP</a>
    <a href="#">BLOG</a>
    <a href="#">ADMIN</a>
</div>
</divb>

<div className={style.icon}>
<div className={style.c}> <FaFacebook/></div>
<div className={style.c}> <FaInstagram /></div>

<div className={style.c}><FaYoutube /></div>
<div className={style.c}><FiTwitter/></div>
</div>
</div>


</footer>




 </>









}