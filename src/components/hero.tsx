import { Link } from "react-router-dom"
import { Input } from "./ui/input"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#FFF0F5] dark:bg-[#4B0082]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#DB7093] dark:text-[#FFF0F5]">
                  Indulge in the Sweetness of Swiss Roll Cakes
                </h1>
                <p className="max-w-[600px] text-[#DB7093] md:text-xl dark:text-[#FFF0F5]">
                  Discover the perfect balance of fluffy sponge and rich cream in our handcrafted
                  Swiss Roll Cakes.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-[#DB7093] px-8 text-sm font-medium text-[#FFF0F5] shadow transition-colors hover:bg-[#DB7093]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB7093] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#FFF0F5] dark:text-[#DB7093] dark:hover:bg-[#FFF0F5]/90 dark:focus-visible:ring-[#FFF0F5]"
                  to="#"
                >
                  Order Now
                </Link>
                <a
                  className="inline-flex h-10 items-center justify-center rounded-md border border-[#DB7093] border-[#DB7093] bg-[#FFF0F5] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#FFF0F5]/90 hover:text-[#DB7093] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB7093] disabled:pointer-events-none disabled:opacity-50 dark:border-[#FFF0F5] dark:border-[#FFF0F5] dark:bg-[#4B0082] dark:hover:bg-[#FFF0F5]/90 dark:hover:text-[#DB7093] dark:focus-visible:ring-[#FFF0F5]"
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
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-[#FFF0F5] px-3 py-1 text-sm text-[#DB7093] dark:bg-[#4B0082]">
                Our Favorites
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#DB7093] dark:text-[#FFF0F5]">
                Indulge in Our Signature Flavors
              </h2>
              <p className="max-w-[900px] text-[#DB7093] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FFF0F5]">
                From classic vanilla to decadent chocolate, our Swiss Roll Cakes are made with the
                finest ingredients and baked with love.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              alt="Swiss Roll Cakes"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              height="310"
              src="src/img/mtb.jpg"
              width="550"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#DB7093] dark:text-[#FFF0F5]">
                      Raspberry Swirl
                    </h3>
                    <p className="text-[#DB7093] dark:text-[#FFF0F5]">
                      A delightful combination of fluffy sponge and tangy raspberry cream.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#DB7093] dark:text-[#FFF0F5]">
                      Chocolate Hazelnut
                    </h3>
                    <p className="text-[#DB7093] dark:text-[#FFF0F5]">
                      Rich chocolate sponge with a creamy hazelnut filling.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold text-[#DB7093] dark:text-[#FFF0F5]">
                      Matcha Green Tea
                    </h3>
                    <p className="text-[#DB7093] dark:text-[#FFF0F5]">
                      A delicate balance of earthy matcha and sweet cream.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF0F5] dark:bg-[#4B0082]">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#DB7093] dark:text-[#FFF0F5]">
                Baked with Love at Our Cozy Bakery
              </h2>
              <p className="max-w-[600px] text-[#DB7093] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FFF0F5]">
                Our bakery has been serving the community with delicious Swiss Roll Cakes for over 8
                years. Using only the freshest ingredients, we take pride in creating the perfect
                balance of fluffy sponge and rich, creamy fillings.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#DB7093] px-8 text-sm font-medium text-[#FFF0F5] shadow transition-colors hover:bg-[#DB7093]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB7093] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#FFF0F5] dark:text-[#DB7093] dark:hover:bg-[#FFF0F5]/90 dark:focus-visible:ring-[#FFF0F5]"
                to="#"
              >
                Visit our store!
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#DB7093] border-[#DB7093] bg-[#FFF0F5] px-8 text-sm font-medium shadow-sm transition-colors hover:bg-[#FFF0F5]/90 hover:text-[#DB7093] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#DB7093] disabled:pointer-events-none disabled:opacity-50 dark:border-[#FFF0F5] dark:border-[#FFF0F5] dark:bg-[#4B0082] dark:hover:bg-[#FFF0F5]/90 dark:hover:text-[#DB7093] dark:focus-visible:ring-[#FFF0F5]"
                to="/productDetails"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 border-t bg-[#FFF0F5] dark:bg-[#4B0082]">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-[#DB7093] dark:text-[#FFF0F5]">
              Pickup Your Favorite Swiss Roll Cakes
            </h2>
            <p className="mx-auto max-w-[600px] text-[#DB7093] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-[#FFF0F5]">
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
            <p className="text-xs text-[#DB7093] dark:text-[#FFF0F5]">
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
