import {createBrowserRouter,RouterProvider,} from "react-router-dom";

import api from "./api"
import "./App.css"

import { Home } from "./Pages/home";
import { Dashboard } from "./Pages/dashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  },
]);

function App() {
  

  return (
    <div className="App">
     <RouterProvider router={router} /> 

      
    </div>
  )
}

export default App
