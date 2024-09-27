  const Urls={

         getAllProducts:async ()=>{

          let respones=await fetch('https://fakestoreapi.com/products')

           let result= await respones.json()

              return result

         },

         getSingalProduct:async(query)=>{

     let respones=await fetch(`https://fakestoreapi.com/products`)
      let result=await respones.json()
        let filterdata= result.filter((item)=>item.category.toLowerCase().includes(query.toLowerCase()))
            console.log(filterdata)

            return filterdata

         },
            
         productget: async  (productId) => {
          
            // Remove the space between 'products/' and `${id}`
       
              let res = await fetch(`https://fakestoreapi.com/products/${productId}`)

              let result = await res.json()
             
               return  result
          

    }

}
export default Urls