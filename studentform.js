
let submit=document.querySelector("#submit")
console.log(submit)

  submit.addEventListener("click",function(e){
   alert("hello")
    let schoolName=document.getElementById("schoolName").value
    console.log(schoolName)
    let studentName=document.getElementById("StudentName").value
     console.log(studentName)
     let date=document.getElementById("Date").value
     console.log(date)
    let cl=document.getElementById("class").value
     console.log(cl)
     let rol=document.getElementById("roll").value
     console.log(rol)
     let contact=document.getElementById("con").value
     console.log(contact)
     printcard()
  e.preventDefault()

  })

    function printcard(){
document.getElementById("schoolval").innerText=document.getElementById("schoolName").value

document.getElementById("studentval").innerText=document.getElementById("StudentName").value
document.getElementById("dateval").innerText=document.getElementById("Date").value
document.getElementById("classval").innerText=document.getElementById("class").value

document.getElementById("numberval").innerText=document.getElementById("roll").value
document.getElementById("conval").innerText=document.getElementById("con").value
    }
  
