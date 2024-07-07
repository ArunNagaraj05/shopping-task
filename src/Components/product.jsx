import { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

function Product({cart,setCart,data}){
   let [toggle, setToggle] = useState(true)
   const [rating, setRating] = useState(0)
   const handleRating = (rate) => {
    setRating(rate)
  }
    return <>
    <div class="col mb-5">
              <div class="card h-100">
                  <img class="card-img-top" src={data.image} alt="..." />
                  <div class="card-body p-4">
                      <div class="text-center">
                          <h5 class="fw-bolder">{data.name}</h5>
                          <p class="fw">{data.description}</p>
                          {data.price}
                          <Rating onClick={handleRating} initialValue={rating} size={25}/>
                      </div>
                  </div>
                  <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                      {
                        toggle?<div class="text-center"><button class="btn btn-outline-dark mt-auto"
                        onClick={()=>{
                           setCart(cart+1)
                           setToggle(!toggle)
                        }}
                        >Add To Cart</button></div>:

                        <div class="text-center"><button class="btn btn-dark mt-auto"
                      onClick={()=>{
                         setCart(cart-1)
                         setToggle(prev=>!prev)
                      }}
                      >Remove from Cart</button></div>
                      }
                  </div>
              </div>
      </div>
    </>
}

export default Product