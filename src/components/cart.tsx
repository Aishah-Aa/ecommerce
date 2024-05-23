import { useContext } from "react"
import { ShoppingCart } from "lucide-react"

import { Button } from "./ui/button"
import { GlobalContext } from "@/App"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"

export function Cart() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")

  const { state, handleDeleteFromCart, handleAddToCart } = context 

  const groups = state.cart.reduce((acc,obj) => {
    const key = obj.id
    const curGroup = acc[key] ?? []
    return { ...acc, [key]: [...curGroup, obj] }
   }, {})

   
   const total = state.cart.reduce((acc, curr) => {
     return acc+ curr.price
   }, 0)

   const keys = Object.keys(groups)
   console.log("keys:", keys)

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
      </PopoverContent>
    </Popover>
  )
}
