import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Product } from "@/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

import api from "@/api"
import { Navbar } from "@/components/navbar"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { EditDialog } from "@/components/editDialog"

export function Dashboard() {
  const queryClient = useQueryClient()

  const [product, setProduct] = useState({
    name: "",
    categoryId: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postProduct()
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    console.log("{name, value}:", { name, value })
    setProduct({
      ...product,
      [name]: value
    })
  }

  const postProduct = async () => {
    try {
      const res = await api.post("/products", product)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const getProducts = async () => {
    try {
      const res = await api.get("/products")
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  const handleDeleteProduct = async (id:string) => {
    await deleteProduct(id)
    queryClient.invalidateQueries({ queryKey: ["products"] })
    }

  const deleteProduct = async (id:string) => {
    try {
      const res = await api.delete(`/products/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data: products, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })

  return (
    <>
    <Navbar/>
      <form className="mt-20 w-1/3 mx-auto" onSubmit={handleSubmit}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight"> Add New Products</h3>
        <Input className="mt4" type="text" placeholder="Name" onChange={handleChange} />
        <Input className="mt4" type="text" placeholder="Category" onChange={handleChange} />

        <div className="flex justify-between">
          <Button type="submit" className="mt-4">
            {" "}
            Submit
          </Button>
          <Button type="reset" className="mt-4">
            {" "}
            Reset
          </Button>
        </div>
      </form>

      <div>
        <h1 className="scroll-m-20 text-4xl my-10 font-semibold tracking-tight">Products</h1>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHead className="w-[100px]" ></TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Price</TableHead>
              <TableHead className="text-left">Quantity</TableHead>
              <TableHead className="text-left">Category Id</TableHead>
              <TableHead></TableHead>
              
            </TableRow>
          </TableHeader>
          <TableBody>
            {products?.map((product) => (
              <TableRow key={product.id}>
                <TableCell></TableCell>
                <TableCell className="text-left">{product.name}</TableCell>
                <TableCell className="text-left">{product.price}</TableCell>
                <TableCell className="text-left">{product.quantity}</TableCell>
                <TableCell className="text-left">{product.categoryId}</TableCell>
                <TableCell className="text-left">
                  <EditDialog product={product}/>
                  </TableCell>
                <TableCell className="text-left">
                <AlertDialog>
      <AlertDialogTrigger asChild>
      <Button variant="destructive">X</Button> 
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure you want to delete{product.name}?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this
            product and remove  data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={()=> handleDeleteProduct(product.id)}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </>
  )
}
