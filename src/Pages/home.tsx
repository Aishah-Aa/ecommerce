import api from "@/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select } from "@/components/ui/select"
import { Product } from "@/types"
import { useQuery } from "@tanstack/react-query"


 export function Home (){

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
      console.log("list of products ", data)

    const onChange = (e) => {
      console.log(e.target.value)
    }  

    return(
     <>    
        <h1 className="text-2xl uppercase mb-10">Products</h1>
       
          <Select title="product" name="products"onChange={onChange}>
          {data?.map((product) => {
            return(
            <option key={product.id} value = {product.id} >{product.id}
              </option>
              )
               })} 
          </Select>    


           <section className="flex flex-col md:flex-row gap-4 max-w-6xl mx-auto flex-wrap">
           {data?.map((product) => (
           <Card key={product.id} className="w-[250px]">
            <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription>Some Description here</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card Content Here</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Add to cart</Button>
          </CardFooter>
        </Card>
         ))}
         </section>
         {error && <p className="text-red-500">{error.message}</p>}
   
    </>
    )
 }
