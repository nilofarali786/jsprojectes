//let selectoption=document.getElementById()
let Inputarry=["text|Text","email|Email","password|Password"]
  let select=document.createElement("select")
  let msg=document.getElementById("msg")
  let div=document.getElementById("sel1")
   let inputvalue
   let form= document.getElementById("form")
   let option
document.getElementById("sel").addEventListener("change", function(){

  let  selectoption1=document.getElementById("sel").value
 
  
  
    if(selectoption1=="none"){
        msg.innerText="plese choose the option"
}else{
        let select=document.createElement("select")
        console.log(select)
        if(selectoption1 == "input"){
           for(input in Inputarry){
            let inputvalue=Inputarry[input].split("|")
            //console.log(inputvalue[0])
            var option=document.createElement("option")
               option.value=inputvalue[0]
               option.innerHTML=inputvalue[1]
                 select.appendChild(option) 
                
           }
                  
           div.appendChild(select )
          

        }
             
          
}

})

    function add(){
            
             console.log(option)
           if(option =="undefined"){
       let input=document.createElement("input")

        input.placeholder="enter your name"

          form.append(input)
           }
    }
