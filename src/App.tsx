import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./Pages/home"
import { Dashboard } from "./Pages/dashboard"
import { createContext, useState } from "react"
import { Product } from "./types"

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  }
])

type GlobalContextType = {
  state: GlobalState
  handleAddToCart: (product: Product) => void //have products here to fetch them if i want them everywhere
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
    setState({
      ...state,
      cart: [...state.cart, product]
    })
  }

  // const handleRemoveFromCart = (product: Product) => {
  //   setState({  - fill from the array,then update the state with the new filter
  //     ...state, - then pass it to the context then take it from there
  //     cart:[...state.cart, product]
  //   })
  // }
  return (
    <div className="App">
      <GlobalContext.Provider value={{ state, handleAddToCart }}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  )
}

export default App
