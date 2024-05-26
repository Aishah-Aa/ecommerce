import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"


import { PaginationPrevious, 
PaginationItem, PaginationLink, 
PaginationEllipsis, 
PaginationNext, 
PaginationContent, 
Pagination } from "@/components/ui/pagination"
import { Navbar } from "@/components/navbar"
import { Product } from "@/types"
import api from "@/api"
import { Button } from "@/components/ui/button"
import { StarIcon } from "lucide-react"
import { Separator } from "@radix-ui/react-menubar"



export function ProductDetails() {
  const params = useParams()

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
  const {
    data: product,
    error,
    isLoading
  } = useQuery<Product>({
    queryKey: ["products"],
    queryFn: getProduct
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!product) {
    return <p>product is not found</p>
  }

  return (
    <>
      <Navbar />
      <div>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-6xl px-4 mx-auto py-6">
        <div className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-5 items-start">
            <div className="hidden md:flex flex-col gap-4">
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Product Thumbnail"
                  className="aspect-[5/6] object-cover"
                  height="120"
                  src=""
                  width="100"
                />
                <span className="sr-only">View Image 1</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Product Thumbnail"
                  className="aspect-[5/6] object-cover"
                  height="120"
                  src="/placeholder.svg"
                  width="100"
                />
                <span className="sr-only">View Image 2</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Product Thumbnail"
                  className="aspect-[5/6] object-cover"
                  height="120"
                  src="/placeholder.svg"
                  width="100"
                />
                <span className="sr-only">View Image 3</span>
              </button>
              <button className="border hover:border-gray-900 rounded-lg overflow-hidden transition-colors dark:hover:border-gray-50">
                <img
                  alt="Product Thumbnail"
                  className="aspect-[5/6] object-cover"
                  height="120"
                  src="/placeholder.svg"
                  width="100"
                />
                <span className="sr-only">View Image 4</span>
              </button>
            </div>
            <div className="md:col-span-4">
              <img
                alt="Product Image"
                className="aspect-[2/3] object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                height="900"
                src="/placeholder.svg"
                width="600"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-6 md:gap-10 items-start">
          <div className="grid gap-4">
            <h1 className="font-bold text-3xl lg:text-4xl">Acme Circles T-Shirt</h1>
            <div>
              <p>60% combed ringspun cotton/40% polyester jersey tee.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-0.5">
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-primary" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
                <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <div className="text-4xl font-bold">$99</div>
            </div>
          </div>
          <div className="grid gap-4">
            <Button size="lg">Add to Cart</Button>
          </div>
          <Separator />
          <div className="grid gap-4 text-sm leading-loose">
            <h2 className="font-bold text-lg">Product Details</h2>
            <div>
              <p>
                Introducing the Acme Circles T-Shirt, a perfect blend of style and comfort for the modern individual.
                This tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester
                jersey, ensuring a soft and breathable fabric that feels gentle against the skin.
              </p>
              <p>
                The design of the Acme Circles T-Shirt is as striking as it is comfortable. The shirt features a unique
                circle-inspired pattern that adds a modern and eye-catching touch to your ensemble.
              </p>
            </div>
            <div>
              <h3 className="font-bold">Product Specifications</h3>
              <ul className="list-disc pl-4">
                <li>60% combed ringspun cotton, 40% polyester jersey</li>
                <li>Machine washable</li>
                <li>Relaxed fit</li>
                <li>Ribbed collar and cuffs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">More Products</h2>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Acme Hoodie</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Soft and cozy hoodie with Acme logo.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">$49.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Acme Backpack</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Durable and stylish backpack for everyday use.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">$79.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Acme Water Bottle</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Reusable and eco-friendly water bottle.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">$19.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm">
            <img
              alt="Product Image"
              className="w-full h-48 object-cover"
              height="300"
              src="/placeholder.svg"
              style={{
                aspectRatio: "400/300",
                objectFit: "cover",
              }}
              width="400"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium mb-2">Acme Sunglasses</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">Stylish and durable sunglasses for any occasion.</p>
              <div className="flex items-center justify-between">
                <span className="text-primary font-medium">$29.99</span>
                <Button size="sm">Add to Cart</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
   
      </div>
    </>
  )
}
