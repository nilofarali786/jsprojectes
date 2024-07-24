   import style from "./capus.module.css"
   import { FaArrowRight } from "react-icons/fa6";
import React from 'react'

const Capus = () => {
  return <>
<div  className={style.campus}>
<p> GALLERY</p>
<h1>The Campus</h1>
</div>
<div className={style.photo}>
<div  className={style.im}>
<img src="https://img.freepik.com/free-photo/low-angle-cheerful-team-students-passed-test-by-preparing-all-together_496169-2336.jpg?ga=GA1.1.1092670992.1688550973&semt=sph"></img>
<img src="https://img.freepik.com/free-photo/free-time-students-bachelor-s-campus-life-rhythm-five-friendly-students-are-walking_8353-6408.jpg?ga=GA1.1.1092670992.1688550973&semt=sph"></img>
<img  src="https://img.freepik.com/premium-photo/cheerful-brunette-student-girl-with-black-backpack-holds-books-modern-building_255667-547.jpg?ga=GA1.1.1092670992.1688550973&semt=sph"></img>
<img src="https://img.freepik.com/premium-photo/cheerful-indian-asian-young-group-college-students-friends-laughing-together-while-sitting-standing-walking-campus_466689-7322.jpg?ga=GA1.1.1092670992.1688550973&semt=sph"></img>
</div>
<div className={style.btn}>
<button className={style.button}>ReadMore  <FaArrowRight/>  </button>
</div>
</div>


  </>
    im
}

export default Capus