import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "./ui/navigation-menu"

import { Cart } from "./cart"
import { useContext } from "react"
import { GlobalContext } from "@/App"
import { ROLE } from "@/types"
import { Button } from "./ui/button"
import { CakeSlice } from "lucide-react"


export function Navbar() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state, handleRemoveUser } = context

  const handleLogout = () => {
    if (typeof window !== undefined) {
      window.location.reload()
    }
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    
    handleRemoveUser()
  }

  return (
    
    <header>
    <div className="flex justify-between">
        
            <Link to="/">
            <CakeSlice className=" text-pink-700 dark:text-pink-800" />
            </Link>
            
      <NavigationMenu>
        <NavigationMenuList className="gap-4   text-pink-700 dark:text-pink-800 ">
          <NavigationMenuItem className= "hover:underline underline-offset-4">
            <Link to="/">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem className= "hover:underline underline-offset-4">
            <Link to="/Aboutus">
              <NavigationMenuLink>About Us </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          {!state.user && (
            <NavigationMenuItem className= "hover:underline underline-offset-4">
              <Link to="/signup">
                <NavigationMenuLink>Signup</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}

          {!state.user && (
            <NavigationMenuItem className= "hover:underline underline-offset-4">
              <Link to="/login">
                <NavigationMenuLink>Login</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
          
          {state.user && (
            <NavigationMenuItem className= "hover:underline underline-offset-4">
                <Button variant="outline" onClick={handleLogout}>Logout</Button>
            </NavigationMenuItem>
          )}

          {state.user?.role === ROLE.Admin && (
            <NavigationMenuItem className= "hover:underline underline-offset-4">
              <Link to="/dashboard">
                <NavigationMenuLink>Dashboard</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )}
        </NavigationMenuList>
      </NavigationMenu>

      <Cart />
    </div>
    </header>
  )
}
