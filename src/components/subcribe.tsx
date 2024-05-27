import { Testimonial } from "./testimonial"
import { Button } from "./ui/button"
import { Input } from "./ui/input"

export function Subscribe() {
  <Testimonial />

  return (
    <main className="flex flex-col items-center justify-center w-full">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[#FFF0F5]">
        <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl tracking-tighter text-[#C21E56] font-serif  sm:text-4xl md:text-5xl">
              Stay Updated on Our Latest Creations
            </h2>
            <p className="mx-auto max-w-[700px] text-sm font-normal text-[#E6A09F] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Subscribe to our newsletter and be the first to hear about our new Swiss roll flavors
              and special offers.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1 bg-white border-[#e87c7c] focus:ring-[#e87c7c]"
                placeholder="Enter your email"
                type="email"
              />
              <Button
                className="bg-[#DB7093] text-[#FFF0F5] dark:bg-[#FFF0F5] dark:text-[#DB7093]"
                type="submit"
                variant="default"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
