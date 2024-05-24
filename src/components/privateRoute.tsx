import { Navigate } from "react-router-dom"
import { ReactElement } from "react"
import jwt from "jwt-decode"

import { reshapeUser } from "@/lib/utils"
import { ROLE } from "@/types"

export function PrivateRoute({ children }: { children: ReactElement }) {
  const token = localStorage.getItem("token") || ""
  const decodedToken = jwt(token)
  const decodedUser = reshapeUser(decodedToken)

  if (decodedToken) {
    for (const [key, value] of Object.entries(decodedToken)) {
      let cleankey = ""

      if (key.startsWith("http")) {
        cleankey = key.split("identity/claims/")[1]
      } else {
        cleankey = key
      }

      decodedUser[cleankey] = value
    }
  }
  if (!token) return <Navigate to="/" />

  console.log("decodedToken:", decodedToken)
  console.log("decodedUser:", decodedUser)

  
  return decodedUser.role === ROLE.Customer ? <Navigate to="/" /> : children
}
