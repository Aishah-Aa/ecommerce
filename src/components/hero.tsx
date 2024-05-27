import { Link } from "react-router-dom"

import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#FFF0F5] dark:bg-[#DA7E7E]">

        <header className="text-3xl  font-serif tracking-tighter flex  sm:text-5xl text-[#C21E56] dark:text-[#DA7E7E]"> 
                Sweet Rolls Bakery Welcomes You 
                </header>
        <div className="container px-4 md:px-6">
          
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                
                <h1 className="text-3xl  font-serif tracking-tighter sm:text-5xl text-[#C21E56] dark:text-[#DA7E7E]">
                  Indulge in the Sweetness of Swiss Roll Cakes
                </h1>
                <p className="max-w-[600px] font-normal text-[#DA7E7E]">
                  Discover the perfect balance of fluffy sponge and rich cream in our handcrafted
                  Swiss Roll Cakes.
                </p>
              </div>
              <div className=" flex-col gap-2 min-[400px]:flex-row">
                <a
                  className="flex h-10 items-center justify-center rounded-md border border-[#DB7093]  bg-[#FFF0F5] px-8 text-sm font-medium shadow-sm transition-colors
                   hover:bg-[#FFF0F5]/90 hover:text-[#DB7093] focus-visible:outline-none focus-visible:ring-1
                    focus-visible:ring-[#DB7093] disabled:pointer-events-none disabled:opacity-50 
                     "
                  href="#product-list"
                >
                  Explore Flavors
                </a>
              </div>
            </div>
            <img
              alt="Swiss Roll Cakes"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="550"
              src="src/img/tm.jpg"
              width="550"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF0F5] dark:bg-[#4B0082]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 ">
              <div className="inline-block rounded-lg font-normal bg-[#FFF0F5] px-3 py-1 text-sm text-[#DA7E7E] dark:bg-[#4B0082]">
                Our Favorites
              </div>
              <h2 className="text-3xl font-serif  mt- sm:text-5xl text-[#C21E56] dark:text-[#FFF0F5]">
                Indulge in Our Signature Flavors
              </h2>
              <p className="max-w-[900px] font-normal text-[#DA7E7E] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FFF0F5]">
                From classic vanilla to decadent chocolate, our Swiss Roll Cakes are made with the
                finest ingredients and baked with love.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Swiss Roll Cakes"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="710"
              src="src/img/mtb.jpg"
              width="650"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#CD5C5C] dark:text-[#FFF0F5]">
                      Raspberry Swirl
                    </h3>
                    <p className="text-[#E6A09F] font-normal dark:text-[#FFF0F5]">
                      A delightful combination of fluffy sponge and tangy raspberry cream.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#CD5C5C] dark:text-[#FFF0F5]">
                      Chocolate Hazelnut
                    </h3>
                    <p className="text-[#E6A09F] font-normal dark:text-[#FFF0F5]">
                      Rich chocolate sponge with a creamy hazelnut filling.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#CD5C5C] dark:text-[#FFF0F5]">
                      Matcha Green Tea
                    </h3>
                    <p className="text-[#E6A09F] font-normal dark:text-[#FFF0F5]">
                      A delicate balance of earthy matcha and sweet cream.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#FFF0F5] py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl sm:text-5xl font-serif w-auto text-[#C21E56]  mb-14">
                Here is What Sweet Rolls Customers Say
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarImage alt="Customer" src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-[#CD5C5C]">LK</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold ,normal text-[#CD5C5C]">Laila Khamis</h3>
                      <div className="flex items-center gap-1 text-[#d48ba3]"></div>
                    </div>
                    <p className="text-sm font-normal text-[#E6A09F]">
                      The Swiss Roll Cakes are absolutely divine! The light and fluffy sponge cake,
                      combined with the rich and creamy filling, is a heavenly experience. I can not
                      get enough of them!
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarImage alt="Customer" src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-[#CD5C5C]">SM</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold normal text-[#CD5C5C]">Saleh Mohammad</h3>
                      <div className="flex items-center gap-1 text-[#d48ba3]"></div>
                    </div>
                    <p className="text-sm font-normal text-[#E6A09F]">
                      I have tried many Swiss Roll Cakes, but the ones from this shop are truly
                      exceptional. The flavors are perfectly balanced, and the texture is simply
                      divine. I highly recommend them to anyone with a sweet tooth!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarImage alt="Customer" src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-[#CD5C5C]">Y</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold normal text-[#CD5C5C] mb-2">Yousef</h3>
                    <p className="text-sm font-normal text-[#E6A09F]">
                      The Swiss Roll Cakes from this shop are a true delight. The attention to
                      detail and the quality of the ingredients are truly impressive. I can not
                      recommend them enough!
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-y-6 mb-4 gap-4">
                  <Avatar className="w-12 h-12 shrink-0">
                    <AvatarImage alt="Customer" src="/placeholder-user.jpg" />
                    <AvatarFallback className="text-[#CD5C5C]">X</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold flex items-start normal text-[#CD5C5C] gap-4">
                      Xehanort
                    </h3>
                    <p className="text-sm text-[#E6A09F]">
                      I have been a loyal customer of this Swiss Roll Cake shop for years. The
                      consistent quality and the delightful flavors keep me coming back time and
                      time again. Highly recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#FFF0F5] dark:bg-[#4B0082]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl  font-serif tracking-tighter sm:text-5xl text-[#C21E56] dark:text-[#DA7E7E] mb-6">
              Pickup Your Favorite Swiss Roll Cakes
            </h2>
            <p className="mx-auto max-w-[600px]  md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FFF0F5]  font-normal text-[#E6A09F]">
              Our bakery is open daily for pickup orders. Stop by and treat yourself to a delicious
              slice of heaven.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-[#FFF0F5] dark:bg-[#4B0082] text-[#DB7093] dark:text-[#FFF0F5]"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className="bg-[#DB7093] text-[#FFF0F5] dark:bg-[#FFF0F5] dark:text-[#DB7093]"
                type="submit"
              >
                Order Now
              </Button>
            </form>
            <p className="text-xs text-[#C21E56] dark:text-[#FFF0F5]">
              Sign up to get notified of latest products.
              <Link className="underline underline-offset-2" to="#">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
