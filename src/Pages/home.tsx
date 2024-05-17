import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useQuery } from "@tanstack/react-query"

import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import api from "@/api"
import {  Navbar } from "@/components/navbar"
import { GlobalContext } from "@/App"
import { useContext } from "react"
import { Link } from "react-router-dom"



export function Home() {
  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { handleAddToCart } = context

  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })


  return (
    <>
      <Navbar />
      
      <section className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto flex-wrap">
        {data?.map((product) => (
          <Card key={product.id} className="w-[270px]">
            <CardHeader>
              <img alt={product.name} src={product.image} className="mb-2 h-44  object-contain" />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>Read More..</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.price}.00SR</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">
                <Link to={`/products/${product.id}`}>More Details</Link>
              </Button>
              <Button className="w-full" onClick={() => handleAddToCart(product)}>
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
      {error && <p className="text-red-500">{error.message}</p>}
    </>
  )
}
