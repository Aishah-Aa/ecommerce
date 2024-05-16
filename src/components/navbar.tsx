import { Link } from "react-router-dom"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "./ui/navigation-menu"
import { Cart } from "./cart"

export function Navbar() {

  return (
    <div className="flex justify-between">
      <h3>Sweet Rolls Logo</h3>

      <NavigationMenu>
        <NavigationMenuList className="gap-4">
          <NavigationMenuItem >
            <Link to="/docs">
              <NavigationMenuLink>Home</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
            <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>About Us</NavigationMenuLink>
            </Link>
            </NavigationMenuItem>

          <NavigationMenuItem>
            <Link to="/docs">
              <NavigationMenuLink>Dashboard</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Cart/>
    </div>
  )
}