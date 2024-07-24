import style from './program.module.css'
import React from 'react'
import { RiContactsLine } from "react-icons/ri";

const Programe = () => {
  return <>
   
    <div className={style.tilte}>
    <p>Our Programe</p>
    <h1>What We Offer</h1>

    </div>
    <div className={style.Programes}>
    
     <div className={style.Programe}>
<img src="https://img.freepik.com/premium-photo/front-view-male-student-wearing-black-backpack-holding-copybooks-files-blue-wall_1179130-214200.jpg?w=900"></img>
      <div  className={style.caption}>
      <RiContactsLine className={style.icon} />
        <p>GrudeDegree</p>
      </div>
     </div>
     <div className={style.Programe}>
<img src="https://img.freepik.com/premium-photo/pretty-indian-asian-young-college-girl-holding-books-bag-while-standing-isolated-white-background_466689-18256.jpg?w=740"></img>
<div  className={style.caption}>
      <RiContactsLine className={style.icon} />
        <p>GrudeDegree</p>
      </div>
</div>
 <div className={style.Programe}>
<img src="https://img.freepik.com/free-photo/two-collegues-working-business-center_1303-17287.jpg?t=st=1720095761~exp=1720099361~hmac=1f39275ed8b673071443e424a2552153cd40105c98f56995c7faed93abffb908&w=900"></img>
<div  className={style.caption}>
      <RiContactsLine className={style.icon} />
        <p>GrudeDegree</p>
      </div>
</div>   
    
    
    
    </div>
    </>
}

export default Programe