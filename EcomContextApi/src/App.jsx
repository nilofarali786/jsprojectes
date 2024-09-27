import Navbar from "./components/navbar"
import Allproducts from "../src/components/allproducts"
import Urls from './webservices/Api'
import { Routes ,Route,createSearchParams, useNavigate} from "react-router-dom"
import Products from "../src/components/products"
import Card from "../src/components/Card"
import PageNot from "./Pagenot"
import ProviderFun from "./components/contrax"
export default function App(){

  



  
    const navigate=useNavigate()
  function onserch(serach){

 navigate(`/?${createSearchParams({query:serach})}`)
     console.log(serach)



  }
return<>
<Navbar onsearch={onserch}/>
<Routes>
  <Route path="/" element={<Allproducts/>}></Route>
  <Route path="/product/:productId" element={<Products/>}></Route>
  <Route path="/card" element={<Card/>}></Route>
  <Route path="*" element={<PageNot/>}></Route>
</Routes>


</>






}
