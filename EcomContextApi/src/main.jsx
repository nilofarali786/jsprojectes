import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../src/index.css'
import { BrowserRouter } from 'react-router-dom'
import ProviderFun from './components/contrax.jsx'






createRoot(document.getElementById('root')).render(
  
         <ProviderFun>
          <BrowserRouter>
     

        <App /> 
           
   
    </BrowserRouter>
    
    </ProviderFun>
  
)
