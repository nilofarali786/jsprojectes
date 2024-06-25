const API_KEY = `2a8330bbebc0384a3061881fe4bb799e`


//const API = `https://api.openweathermap.org/data/2.5/weather?
 //q=${city}&appid=${API_KEY}&units=metric`
//const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
let form=document.querySelector("#form")
let  weather=document.querySelector('#waether')
let   search=document.querySelector("#search")
 //console.log(search)

  const getdata= async(city)=>{
const API = `https://api.openweathermap.org/data/2.5/weather?
 q=${city}&appid=${API_KEY}&units=metric`

  respones= await fetch(API)
  let data= respones.json()
  console.log(data)

  }
form.addEventListener("submit" ,function(event){
   let val= search.value
    getdata(val)
   event.preventDefault()

})