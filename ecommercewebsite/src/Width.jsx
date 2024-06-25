import React, { useState } from 'react'

const Width = () => {

    let [width,setWidth]=useState(1)

    var increment=()=>{

      setWidth(num=>num+10
    
       

    )
}
    var decrement=()=>{

        setWidth(num=>num-10
    
       

        )
           
        
    }
  return <>

    <div style={{backgroundColor:"green",width:`${width}px`}}>jj </div>
<button onClick={increment}>increment</button>
<button onClick={decrement}>decrememt</button>

  </>
    
}

export default Width