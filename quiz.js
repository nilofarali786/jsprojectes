let arry=[

    {question:"what is html",
        a:"hyper text markup laguage",
        b:"stylesheet",
        c:"programing languge",
        d:"tecnical langue",
        ans:"a"
    },

    {question:"js languesd since",
        a:1990,
        b:1920,
        c:1995,
        d:1994,
        ans:'c'
    },

    {question:"what is css",
        a:"hyper text markup laguage",
        b:"stylesheet",
        c:"programing languge",
        d:"tecnical langue",
        ans:"b"
    }
]
let total=arry.length
let right=0;
let rong=0;
let btn=document.querySelector(".btn")
   let inputfelds= document.querySelectorAll(".radio")
  // console.log(inputfelds)
   let question=document.getElementById("h1")
   // console.log(question)
let index=0
 function getQU(){

    if(index==arry.length){
        return endQUIZ()

    } reset()

     let data=arry[index]
      question.innerHTML=`${index+1}) ${data.question}`
      inputfelds[0].nextElementSibling.innerHTML=data.a
      inputfelds[1].nextElementSibling.innerText=data.b
      inputfelds[2].nextElementSibling.innerText=data.c
      inputfelds[3].nextElementSibling.innerText=data.d
      


    

 }

 getQU()
  function selectQizz(){

let value
      inputfelds.forEach((input)=>{

        if(input.checked){
           value=input.value
           
        }
      })

        return value

  }

function getAns(){
    val =selectQizz()
    console.log(val)
  let  data=arry[index]
       if(val == data.ans){
 
          right++

       }else{
       rong ++
       }
       index++
        getQU()
        return ;
  }

  function reset(){
   inputfelds.forEach((input)=>{
    input.checked=false
   })

  }

  function endQUIZ(){
     
    para= document.getElementById("para")
    
    para.innerHTML=`${right}/${total}`
    //para.innerHTML=`THE RONG OPTIONS ${rong}`

  }
  btn.addEventListener("click",getAns)
   
 