import { createContext, useContext, useState } from "react"

const insitalstate={

    card:[],
    addToCard:()=>null,
    removetocard:()=>null,
    addIncremntCount:()=>null,
    decrementCount:()=>null

}



       
const Create= createContext(insitalstate)
 export const UseCard=()=>useContext(Create)

export default  function ProviderFun({children}){

      const [data,setData]=useState(insitalstate.card)

       console.log(data )
       let addToCard=(product)=>{
        console.log(product)
         let status =data.findIndex((item)=>item.id === product.id)
         console.log(status)
         
            if(status == -1){

              setData([...data,{product,qut:1}])

            }



       };

      let removetocard=(product)=>{

        let filterdata=data.filter((item)=>item.id!==product.id)

              setData(filterdata)

       }
   

         let addIncremntCount=(product)=>{
             
               let  addcount=data.map((item)=>{
                     console.log(item)
                      return  item.id === product.id ? {...item,qut : item.qut+1}:item

            
               })
            
           setData(addcount)
         }
         let decrementCount=(product)=>{
            let  minus=data.map((item)=>{
                console.log(item)
                 return  item.id === product.id ? {...item,qut: item.qut>1? item.qut-1:1}:item

       
          })
             setData(minus)

         }
    return<>
        <Create.Provider value={{ data,addToCard,removetocard,addIncremntCount,decrementCount}}>

           {children}
        </Create.Provider>




    </>







}
