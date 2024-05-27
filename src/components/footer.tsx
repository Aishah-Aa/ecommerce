import { Link } from "react-router-dom"

export function Footer() {
  return (
    <footer className="flex bg-[#FFF0F5] flex-col gap-2 sm:flex-row py-6 w-full font-normal shrink-0 items-center px-4 md:px-6 border-t text-[#C21E56]">
      <p className="text-xs color:[#C21E56] font-normal">
        © 2024 Swiss Roll Cakes. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs hover:underline  font-normal underline-offset-4  text-[#C21E56]"
          to="#"
        >
          Contact Us
        </Link>
        <Link
          className="text-xs hover:underline font-normal underline-offset-4 text-[#C21E56] "
          to="#"
        >
          Privacy
        </Link>
      </nav>
    </footer>
  )
}
