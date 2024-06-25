
import React, { useState } from 'react'
import Header from './component/header'
import Product from './component/Product'
import { Route, Routes } from 'react-router-dom'
import  Deatiles from './component/ProductDeatiles'
import Card from './component/Card'
import { items } from './component/Data'
import Searchitem from './component/Searchitem'
const App = () => {
  const [data,setdata]=useState([...items])
  const [card,setcard]=useState([])
  return<>
    <Header setdata={setdata} cards={card}/> 
    <Routes>
  <Route  path='/' element={<Product  data={data} cards={card} setcard={setcard}/>}></Route>
  <Route  path='/product/:id' element={<Deatiles/>}></Route>
  <Route  path='/serach/:saaz'   element={<Searchitem/>}></Route>
  <Route  path='/card'  element={<Card cards={card}  setcard={setcard} />}></Route>
    </Routes>
</>
}

export default App






