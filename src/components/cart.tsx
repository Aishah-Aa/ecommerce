import { useContext } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "./ui/button"
import { GlobalContext } from "@/App"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import api from "@/api"
import { Product } from "@/types"


type OrderItems = {
  quantity: number
  productId: string
  orderCheckoutId: string
  stockId: string
  price: number 
}

type orderCheckout = {
  orderItems:[]
}


export function Cart() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")

  const { state, handleDeleteFromCart, handleAddToCart, handleRemoveCart } = context 

  const groups = state.cart.reduce((acc,obj) => {
    const key = obj.id
    const curGroup = acc[key] ?? []
    return { ...acc, [key]: [...curGroup, obj] }
   }, {} as {[key: string]: Product[]})

   
   const total = state.cart.reduce((acc, curr) => {
     return acc+ curr.price
   }, 0)

  //  this is how the backend of order_checkout looks like 
  //  {
  //   "quantity": 0,
  //   "stockId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "price": 0,
  //   "orderCheckoutId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  // }


  // this is how stocks looks like 
  // {
  //   "productId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  //   "size": "string",
  //   "color": "string"
  // }
   
   const checkoutOrder: orderCheckout = {
    orderItems: []
   }

    Object.keys(groups).forEach((key) => {
      const products = groups[key]
      
      checkoutOrder.orderItems.push({
        quantity: products.length,
        productId: key 
      })
    })
    
    console.log("checkoutOrder:", checkoutOrder)
    const handleCheckout = async () => {
      try {
        const token = localStorage.getItem("token")
        const res = await api.post("/ordercheckouts", checkoutOrder, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        if (res.status === 201) {
          handleRemoveCart()
        }
        return res.data
      } catch (error) {
        console.error(error)
        return Promise.reject(new Error("Something went wrong"))
      }
    }


  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <ShoppingCart />({Object.keys(groups).length})
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-300">
        <div>
          {state.cart.length === 0 && <p>No Items Found</p>}
          {Object.keys(groups).map((key) => {
            const products = groups[key]
            const product = products[0]
            const total = state.cart.reduce((acc, curr) => {
              return acc+ curr.price
             }, 0)
         
            
            return (
              <div className="mb-4 flex items-center gap-4" key={product.id}>
                <img src={product.image} alt={product.name} className="w-20 h-20 object-contain" />
                <h4>{product.name}</h4>
                <span className="font-bold">{total}</span>
                <Button variant="outline" onClick={() => handleDeleteFromCart(product.id)}>
                  -
                </Button>
                <span className="font-bold">({products.length})</span>
                <Button variant="outline" onClick={() => handleAddToCart(product)}>
                  +
                </Button>
                {/* <Button variant="destructive" onClick={() => handleDeleteFromCart(product.id)}>
                  X
                </Button> */}
              </div>
            )
          })}
        </div>
        <p>Total: {total}</p>
        <Button onClick={handleCheckout}>Checkout</Button>
      </PopoverContent>
    </Popover>
  )
}
