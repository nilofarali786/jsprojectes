export default function Pro({number,fun}){


   

 return<>

    <h1>chlid component</h1>
    <h1>{number}</h1>

    <button  onClick={()=>fun(number-5)} >decrement</button>
 </>






}