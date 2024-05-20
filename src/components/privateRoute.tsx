import { ROLE } from "@/types";
import { ReactElement, useEffect } from "react";
import jwt from "jwt-decode"
import { Login } from "@/Pages/login";
import { Navigate } from "react-router-dom";

export function PrivateRoute ({ children }: { children: ReactElement}){
    
    const token = localStorage.getItem("token") || ""
  const decodedToken = jwt(token)
  const decodedUser: any = {}

  if(decodedToken) {
    for (const [key, value]  of Object.entries(decodedToken)) {
      let cleankey = ""

      if(key.startsWith("http")){
         cleankey = key.split("identity/claims/")[1]
      } else {
        cleankey = key 
      }
      
      decodedUser[cleankey] = value 
    }
  }

  console.log("decodedToken:", decodedToken)
  console.log("decodedUser:", decodedUser)
  
  

    console.log("GLOBAL DATA")
    return decodedUser.role === ROLE.Customer? < Navigate to= "/Login" /> :children
} 