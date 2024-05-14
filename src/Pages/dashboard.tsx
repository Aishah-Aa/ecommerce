import api from "@/api"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useQueryClient } from "@tanstack/react-query"
import { useState } from "react"

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

  return (
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
  )
}
