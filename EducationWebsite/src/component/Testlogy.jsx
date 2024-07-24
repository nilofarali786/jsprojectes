import React, { useRef } from 'react'
import style from './test.module.css'
import { GrFormNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
const Testlogy = () => {

      const chge= useRef()
      let tex=0
      var next=()=>{
      
        if(tex < 0){

            tex+=25
        }
        chge.current.style.transform=`traslateX(${tex}%)`
      }

      var pre=()=>{

      
        if(tex > -50 ){
            tex-=25
        }
     chge.current.style.transform=`traslateX(${tex}%)`
        
      }

      
  return <>
  
    <div  className={style.btn}>
<button className={style.next} onClick={pre}><GrFormNext/></button>
<button className={style.pr} onClick={next}><GrPrevious /></button>
<div className={style.sliders}>
<ul ref={chge}>
<li  >
<div className={style.slide}> 
<div className={style.heading}>
<img src="https://img.freepik.com/free-photo/man-with-blue-folder-looks-powerful-satisfied_144627-62972.jpg?t=st=1720435214~exp=1720438814~hmac=772b4736736c75bde4db67a04d74ac49b687c51dc9dd3b1c655ea8133a5a5f52&w=900"></img>
</div>
<div className={style.name}>
<h1>Nilofar Ali 1</h1>
<span>React Devolper</span>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
 </div>


</li>
<li>
<div className={style.slide}> 
<div className={style.heading}>
<img src="https://img.freepik.com/free-photo/front-view-young-man-thumbs-up-within-exam-week_140725-34754.jpg?ga=GA1.1.1092670992.1688550973&semt=ais_user"></img>
</div>
<div className={style.name}>
<h1>Nilofar Ali 2</h1>
<span>React Devolper</span>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
 </div>
</li>
<li>
<div className={style.slide}> 
<div className={style.heading}>
<img src="https://img.freepik.com/free-photo/skeptical-looking-conservatively-clothed-female-teacher-holding-heavy-bright-binders-white_346278-1141.jpg?t=st=1720435134~exp=1720438734~hmac=79a8f9fcaf93736a245111e22cc2b3f01e5b3d57678bb888b74f74e0497f57cc&w=900"></img>
</div>
<div  className={style.name}>
<h1>Nilofar Ali 3</h1>
<span>React Devolper</span>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

 </div>
</li>
<li>
<div className={style.slide}> 
<div className={style.heading}>
<img src="https://img.freepik.com/free-photo/horrified-blonde-college-student-posing-against-pink-wall_273609-20740.jpg?t=st=1720435083~exp=1720438683~hmac=1da00aab97e57e2b80b91438f1295f051fea0616ed0e4e9b7c61f2b25f96d046&w=900"></img>
</div>
<div  className={style.name}>
<h1>Nilofar Ali 4</h1>
<span>React Devolper</span>
</div>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
 </div>
</li>


</ul>



</div>

</div>
</>
}

export default Testlogy