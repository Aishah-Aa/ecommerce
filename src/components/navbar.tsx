import { Link } from "react-router-dom"
import { CakeSliceIcon } from "lucide-react"

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

export function Navbar() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { state, handleRemoveUser } = context

  const handleLogout = () => {
    if (typeof window !== undefined) {
      window.location.reload()
    }
    localStorage.removeItem("token")
    localStorage.removeItem("user")

    handleRemoveUser()
  }

  return (
    <div className="flex justify-between  mb-10">
      <div>
        <header className="  justify-between h-6 w-6 text-pink-700">
          <CakeSliceIcon className="text-lg font-normal">
            <span>
              <h1> Sweet Rolls Bakery </h1>
            </span>
          </CakeSliceIcon>
        </header>
      </div>
      <NavigationMenu className="flex justify-between">
        <NavigationMenuList />
        <NavigationMenuItem className="gap-4 text-[#C21E56] hover:underline">
          <Link to="/">
            <NavigationMenuLink>Home</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="gap-4 text-[#C21E56] hover:underline">
          <Link to="/Aboutus">
            <NavigationMenuLink>About Us </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {!state.user && (
          <NavigationMenuItem className="gap-4 text-[#C21E56] hover:underline">
            <Link to="/signup">
              <NavigationMenuLink>Signup</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        {!state.user && (
          <NavigationMenuItem className="gap-4 text-[#C21E56] hover:underline underline-offset-4">
            <Link to="/login">
              <NavigationMenuLink>Login</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
        {state.user && (
          <NavigationMenuItem className="gap-4 text-[#C21E56]  hover:underline">
            <Button variant="ghost" onClick={handleLogout}>
              Logout
            </Button>
          </NavigationMenuItem>
        )}
        {state.user?.role === ROLE.Admin && (
          <NavigationMenuItem className="gap-4 text-[#C21E56] hover:underline ">
            <Link to="/dashboard">
              <NavigationMenuLink>Dashboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        )}
      </NavigationMenu>
      <Cart />
    </div>
  )
}
