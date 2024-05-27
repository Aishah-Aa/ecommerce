import { useParams } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

import { Navbar } from "@/components/navbar"
import { Product } from "@/types"
import api from "@/api"
import { Testimonial } from "@/components/testimonial"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

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
      <header>
        <Navbar />
      </header>
      <div>
        <section>
          <Card key={product.id} className=" bg-[#FFF0F5] w-full">
            <CardHeader>
              <img alt={product.name} src={product.image} className="mb-2 h-44  object-contain" />
              <CardTitle className="text-[#CB4D5B] font-normal">{product.name}</CardTitle>
              <CardDescription className="text-sm font-normal text-[#E6A09F]">
                At Sweet Rolls, we specialize in creating the perfect Swiss roll cakes with love to
                suit any flavor preference that offers a diverse range of delectable options,
                ensuring there is something for everyone. Whether you crave the classic taste of
                vanilla, the rich indulgence of chocolate, the refreshing hint of matcha, or the
                fruity burst of berries, our Swiss roll cakes are crafted to perfection using the
                finest ingredients.
                <p>
                  {" "}
                  Why Choose Our Swiss Roll Cakes?
                  <li>
                    Versatile Flavors: From timeless classics to innovative blends, our flavor
                    selection caters to all tastes.
                  </li>
                  <li>
                    {" "}
                    Premium Ingredients: We use only the highest quality ingredients to ensure a
                    delightful and unforgettable taste experience.
                  </li>
                  <li>
                    {" "}
                    Beautifully Crafted: Each Swiss roll cake is handmade with care, featuring
                    elegant designs that make them perfect for any occasion.
                  </li>
                </p>
                Explore our website to find the Swiss roll cake that matches your flavor
                preferences. Order online and enjoy a taste of perfection with Swiss Delight!
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between gap-4 "></CardFooter>
          </Card>
        </section>
      </div>
      <Testimonial />
    </>
  )
}
