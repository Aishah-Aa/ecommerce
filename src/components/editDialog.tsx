 import { ChangeEvent, useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "./ui/dialog"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Product } from "@/types"
import api from "@/api"
import { Button } from "./ui/button"

export function EditDialog({ product }: { product: Product }) {
  const queryClient = useQueryClient()
  const [updatedProduct, setUpdatedProduct] = useState(product)

  const updateProduct = async () => {
    try {
      const res = await api.patch(`/products/${updatedProduct.id}`, updatedProduct)
      return res.data
    } catch (error) {
      console.error(error)
      return Promise.reject(new Error("Something went wrong"))
    }
  }
 

  const handleChnage = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    setUpdatedProduct({
      ...updatedProduct,
      name: value
    })
  }

  const handleUpdate = async () => {
    await updateProduct()
    queryClient.invalidateQueries({ queryKey: ["products"] })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit</DialogTitle>
          <DialogDescription>
            Make changes to your product here. Click save when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue={updatedProduct.name}
              className="col-span-3"
              onChange={handleChnage}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleUpdate}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
