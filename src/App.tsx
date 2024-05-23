import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createContext, useEffect, useState } from "react"

import { DecodedUser, Product } from "./types"
import "./App.css"
import { ProductDetails } from "./Pages/productDetails"
import { Home } from "./Pages/home"
import { Dashboard } from "./Pages/dashboard"
import { Login } from "./Pages/login"
import { Signup } from "./Pages/signup"
import { PrivateRoute } from "./components/privateRoute"

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
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    )
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
  handleStoreUser: (user: DecodedUser) => void
}

type GlobalState = {
  cart: Product[]
  user: DecodedUser | null
}

export const GlobalContext = createContext<GlobalContextType | null>(null)

function App() {
  const [state, setState] = useState<GlobalState>({
    cart: [],
    user: null
  })

  useEffect(() => {
    const user = localStorage.getItem("user")
    if (user) {
      const decodedUser = JSON.parse(user)
      setState({
        ...state,
        user: decodedUser
      })
    }
  }, [])

  const handleAddToCart = (product: Product) => {
    
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  const handleDeleteFromCart = (id: string) => {
    const cart = state.cart
    const index = state.cart.findIndex((item) => item.id === id) 
    cart.splice(index, 1)

    setState({
      ...state,
      cart: cart
    })
  }

  const handleStoreUser = (user: DecodedUser) => {
    setState({
      ...state,
      user: user
    })
  }

  return (
    <div className="App">
      <GlobalContext.Provider
        value={{ state, handleAddToCart, handleDeleteFromCart, handleStoreUser }}
      >
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
