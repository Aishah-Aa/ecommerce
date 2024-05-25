import { Link } from "react-router-dom";

export function Footer (){

    return(
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-[#f8e4e4] dark:bg-[#3e1212]">
         <p className="text-xs text-[#7a2323] dark:text-[#f8e4e4]">© 2024 Swiss Roll Cakes. All rights reserved.</p>
         <nav className="sm:ml-auto flex gap-4 sm:gap-6">
           <Link className="text-xs hover:underline underline-offset-4 text-[#c42a2a] dark:text-[#f8e4e4]" to="#">
             Contact
           </Link>
           <Link className="text-xs hover:underline underline-offset-4 text-[#c42a2a] dark:text-[#f8e4e4]" to="#">
             Privacy
           </Link>
           <Link className="text-xs hover:underline underline-offset-4 text-[#c42a2a] dark:text-[#f8e4e4]" to="#">
             Instagram
           </Link>
           <Link  className="text-xs hover:underline underline-offset-4 text-[#c42a2a] dark:text-[#f8e4e4]" to="#">
             Snapchat
           </Link>
         </nav>
       </footer>
    )
}