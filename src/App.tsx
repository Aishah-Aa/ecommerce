import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createContext, useState } from "react"

import { Product } from "./types"
import "./App.css"
import { ProductDetails } from "./Pages/productDetails"
import { Home } from "./Pages/home"
import { Dashboard } from "./Pages/dashboard"
import { Login } from "./Pages/login"
import { Signup } from "./Pages/signup"
import { PrivateRoute, WithAuth } from "./components/privateRoute"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element:(
    <PrivateRoute> 
    <Dashboard />
    </PrivateRoute> )
  },
  {
    path: "/products/:productId",
    element: <ProductDetails />
  }
])

type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void
  handleDeleteFromCart: (id: string) => void //have products here to fetch them if i want them everywhere
}

type GlobalState = {
  cart: Product[]
}
export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: []
  })

  const handleAddToCart = (product: Product) => {
    
    const foundProduct = state.cart.find((cartItem) => cartItem.id == product.id)

    if (foundProduct != null) {
      throw new Error("Product is already in cart ")
    }
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const filteredCart = state.cart.filter((item) => item.id !== id)
    setState({
      ...state,
      cart: filteredCart
    })
  }

  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, handleAddToCart, handleDeleteFromCart }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
