import { useContext } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { GlobalContext } from "@/App";
import { ShoppingCart } from "lucide-react";

export function Cart (){

    const context = useContext(GlobalContext)
    if (!context) throw Error("Context is missing")

    const { state, handleDeleteFromCart } = context

   return(
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline"><ShoppingCart/>({state.cart.length})
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div>
            {state.cart.length === 0 && <p>No Items Found</p>}
            {state.cart.map((product) => {
                return( 
                <div className="mb-4 flex items-center gap-4" key={product.id}>
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-contain"/>
                    <h4>{product.name}</h4>
                    <span className="font-bold">{product.price}</span>
                    <Button variant="destructive" onClick={()=> handleDeleteFromCart(product.id)}>
                        X</Button>
                </div>
                )
            })}
        </div>
      </PopoverContent>
    </Popover>
   ) 
}