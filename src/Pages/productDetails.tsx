import { useParams } from "react-router-dom"

import { useQuery } from "@tanstack/react-query"

import { Product } from "@/types"
import api from "@/api"
import {  Navbar } from "@/components/navbar"

export function ProductDetails(){

    const params = useParams()
    console.log("params:",params)

    const getProduct = async () => {
        try {
          const res = await api.get(`/products/${params.productId}`)
          return res.data
        } catch (error) {
          console.error(error)
          return Promise.reject(new Error("Something went wrong"))
        }
      }
    
      // Queries
      const { data:product, error, isLoading } = useQuery<Product>({
        queryKey: ["products"],
        queryFn: getProduct
      })

    console.log(product)

     if (isLoading) {
        return <p>Loading...</p>
      }
    
     if (!product) {
        return <p>product is not found</p> 
      }
      
    return ( 
      <>
     <Navbar/> 
    <div>

    <h3>{product.name}</h3>
    <p>{product.price}</p>

    </div>
    </>
    )  
    
}