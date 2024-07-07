import { useState } from 'react'
import Product from './Components/product'
import Toolbar from './Components/Toolbar'
import Header from './Components/Header'

function App() {
  let [cart,setCart] = useState(0)
  let data = [
    {
      name:"Sunscreen",
      description:"The truth is best spf for men is as important as women's sunscreen",
      price:"$10.00 - $30.00",
      image:"https://beardo.in/cdn/shop/products/2_dfb25125-82a0-417b-852d-f7b4a45e3afe.jpg?v=1681707819&width=1946"
    },
    {
      name:"Shoes",
      description:"Shop shoes online for Men, Women & Kids at 70% Discount in BFF.",
      price:"$20.00 - $70.00",
      image:"https://5.imimg.com/data5/SELLER/Default/2022/11/YV/ZF/YO/116453489/white-casual-shoes-for-men.jpg"
    },
    {
      name:"Grocery items",
      description:"Buy grocery Shopping online as it takes the same time as drinking a cup of tea.",
      price:"$5.00 - $80.00",
      image:"https://banner2.cleanpng.com/20230823/vye/transparent-delicious-groceries-grocery-items-food-fruits-vege-1711087801192.webp"
    },
    {
      name:"Mobile Phones",
      description:"Shop from a wide selection of Mobile Phones from Samsung, OnePlus, Redmi & more at the best prices.",
      price:"$60.00 - $250.00",
      image:"https://m.media-amazon.com/images/I/71kduvIxBVL.jpg"
    }
  ]
  return <>
     <Toolbar cart={cart}/>
     <Header/>
     <section class="py-5">
        <div class="container px-4 px-lg-5 mt-5">
            <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
           {
            data.map((e,i)=>{
            return <Product cart={cart} setCart={setCart} data={e} key={i}/>
            })
           } </div>
        </div>
    </section>
  </>
}

export default App
