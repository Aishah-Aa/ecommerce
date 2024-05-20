import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChangeEvent, FormEvent, useContext, useState } from "react"
import {  Link, useSearchParams } from "react-router-dom"

import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import api from "@/api"
import {  Navbar } from "@/components/navbar"
import { GlobalContext } from "@/App"
import { Input } from "@/components/ui/input"





export function Home() {

  const [searchParams, setSearchParams] = useSearchParams()
  const defaultSearch = searchParams.get("searchBy") || ""

  const [searchBy, setSearchBy] = useState(defaultSearch)
  const queryClient = useQueryClient() 

  const context = useContext(GlobalContext)
  if (!context) throw Error("Context is missing")
  const { handleAddToCart } = context

  const getProducts = async () => {
    try {
      const res = await api.get(`/products?searchBy=${searchBy}`)
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

 const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  const{value} = e.target 
  setSearchBy(value)
  setSearchParams({
    ...searchParams,
    searchBy: value
  })
  
 }

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
  queryClient.invalidateQueries({ queryKey: ["products"]})
    }

  return (
    <>
      <Navbar />

      <div> 
      <form onSubmit={handleSearch} className=" flex gap-4 mt-10 w- md:1/2 mx-auto mb-10">
      <Input type="search" placeholder="Search for a product here" onChange={handleChange}/>
      <Button type="submit">Search</Button>
      </form>
      </div> 

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
            <CardFooter className="flex justify-between gap-4 ">
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
