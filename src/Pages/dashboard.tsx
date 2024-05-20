import jwt from "jwt-decode"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from "@/components/ui/alert-dialog"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table"
import { Category, Product, User } from "@/types"
import { useQuery, useQueryClient } from "@tanstack/react-query"
import {  useState } from "react"



import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import api from "@/api"
import { Navbar } from "@/components/navbar"
import { EditDialog } from "@/components/editDialog"


export function Dashboard() {
  const queryClient = useQueryClient()

  const [product, setProduct] = useState({
    name: "",
    categoryId: "3ead7f56-b8d6-4ab5-9445-91095fdc3ca8",
    price: 0.0,
    image: ""
  })

  
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

  const getCategories = async () => {
    try {
      const token = localStorage.getItem("token")

      const res = await api.get("/categorys", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
  const getUsers = async () => {
    try {
      const token = localStorage.getItem("token")
      
      const res = await api.get("/users", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  // Queries
  const { data: categories, error: catError } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: getCategories
  })

  // Queries
  const { data: products, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts
  })

  // Queries
  const { data: users, error: userError } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: getUsers
  })

  const productWithCat = products?.map((product) => {
    const category = categories?.find((cat) => cat.id === product.categoryId)

    if (category) {
      return {
        ...product,
        categoryId: category.name
      }
    }
    return product
  })

  const handleDeleteProduct = async (id: string) => {
    await deleteProduct(id)
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct({
      ...product,
      [name]: value
    })
  }

  

  const handleSubmit = async (e) => {
    e.preventDefault()
    await postProduct()
    // Invalidate and refetch
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  const handleSelect = (e) => {
    setProduct({
      ...product,
      categoryId: e.target.value
    })
  }

  const deleteProduct = async (id: string) => {
    try {
      const res = await api.delete(`/products/${id}`)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }

  return (
    <>
      <Navbar />
      <form className="mt-20 w-1/3 mx-auto" onSubmit={handleSubmit}>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight"> Add New Products</h3>
        <Input
          className="mt-4"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <Input
          className="mt-4"
          type="text"
          name="image"
          placeholder="image"
          onChange={handleChange}
        />
        <Input
          className="mt-4"
          type="number"
          name="price"
          placeholder="price"
          onChange={handleChange}
        />

        <select name="cats" onChange={handleSelect}>
          {categories?.map((cat) => {
            return (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            )
          })}
        </select>

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
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]"></TableHead>
              <TableHead className="text-left">Name</TableHead>
              <TableHead className="text-left">Price</TableHead>
              <TableHead className="text-left"></TableHead>
              <TableHead className="text-left">Category Id</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {productWithCat?.map((product) => (
              <TableRow key={product.id}>
                <TableCell></TableCell>
                <TableCell className="text-left">{product.name}</TableCell>
                <TableCell className="text-left">{product.price}</TableCell>
                <TableCell className="text-left"></TableCell>
                <TableCell className="text-left">{product.categoryId}</TableCell>
                <TableCell className="text-left">
                  <EditDialog product={product} />
                </TableCell>
                <TableCell className="text-left">
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button variant="destructive">X</Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          Are you sure you want to delete{product.name}?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently delete this product
                          and remove data from our servers.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction onClick={() => handleDeleteProduct(product.id)}>
                          Continue
                        </AlertDialogAction>
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
