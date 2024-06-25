import { useDispatch, useSelector } from "react-redux"
import { removeTodo ,iD} from "./store/slice"
import { useEffect, useState } from "react"
import { json } from "react-router-dom"
export default   function ShowData(){
   
              const remove= useDispatch()
   const list=useSelector((state)=>state.List.list)
   const [todolist,setTodolist]=useState(list)

 console.log(list)

  let del=(id)=>{

        remove(removeTodo(id))

  }
    var  update=(id)=>{

        remove(iD(id))

      }
    useEffect(()=>{

       const todo=JSON.parse(localStorage.getItem("list"))

       if(todo){
      setTodolist(todo)


       }
        },[])

   return<>
 
   <h1> ShowData</h1>
    <ol>
        {todolist.map(n=><>
        <li  key={n.id}>{n.sname}</li>
        <button onClick={()=>del(n.id)}>Deleted</button>
        <button onClick={()=>update(n.id)}>update</button>
        </>)}
    </ol>

   </>



}