import { Navbar } from "@/components/navbar"
import { CakeSliceIcon, HeartIcon, LeafIcon, SmileIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function AboutUs() {
  <Navbar />
  return (
    <div className="w-full bg-[#FFF0F5]">
      <section className="relative h-[500px] overflow-hidden">
        <img
          alt="Swiss Roll Cake"
          className="absolute inset-0 h-full w-full object-cover object-center"
          height={1080}
          src="img/at.jpg"
          style={{
            aspectRatio: "1920/1080",
            objectFit: "cover"
          }}
          width={1920}
        />
        <div className="relative z-10 flex h-full w-full items-center justify-center bg-black/50 px-4 text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl font-serif tracking-tight text-white sm:text-5xl lg:text-6xl">
              About Our Bakery
            </h1>
            <p className="text-lg font-normal text-gray-300">
              Baking with Passion and Tradition. At our bakery, we take pride in crafting the most
              delectable Swiss roll cakes using only the freshest, locally-sourced ingredients. We
              are committed to using only the highest-quality, locally sourced ingredients to create
              our cakes. Our bakers take immense pride in their craft, meticulously crafting each
              Swiss roll with care and attention to detail. Baking with Love and Integrity. At the
              heart of our bakery is a deep commitment to quality, sustainability, and community. We
              believe in using only the freshest, locally sourced ingredients to create our cakes,
              supporting local farmers and producers
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#FFF0F5] py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 ">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl  font-serif tracking-tighter sm:text-5xl text-[#C21E56] dark:text-[#DA7E7E]">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-[#CB4D5B]">
            At the heart of our bakery are the values that guide our commitment to quality and
            customer satisfaction.
          </p>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-6">
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <LeafIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-normal text-[#CB4D5B]">Fresh Ingredients</h3>
              <p className="mt-2 text-center text-sm font-normal text-[#E6A09F]">
                We source only the freshest, locally-grown ingredients to ensure the highest quality
                in every bite.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <CakeSliceIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-normal text-[#CB4D5B]">Artisanal Baking</h3>
              <p className="mt-2 text-center text-sm font-normal text-[#E6A09F]">
                Our skilled bakers use time-honored techniques to craft each Swiss roll cake with
                meticulous attention to detail.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <HeartIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-normal text-[#CB4D5B]">Passion for Baking</h3>
              <p className="mt-2 text-center text-sm font-normal text-[#E6A09F]">
                Our love for baking and creating delicious treats is at the heart of everything we
                do.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                <SmileIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-lg font-normal text-[#CB4D5B]">Customer Satisfaction</h3>
              <p className="mt-2 text-center text-sm font-normal text-[#E6A09F]">
                We are committed to providing an exceptional customer experience with every order.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <footer className="flex bg-[#FFF0F5] flex-col gap-2 sm:flex-row py-6 w-full font-normal shrink-0 items-center px-4 md:px-6 border-t text-[#C21E56]">
          <p className="text-xs color:[#C21E56] font-normal">
            © 2024 Swiss Roll Cakes. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline  font-normal underline-offset-4  text-[#C21E56]"
              to="#"
            >
              Contact Us
            </Link>
            <Link
              className="text-xs hover:underline font-normal underline-offset-4 text-[#C21E56] "
              to="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}
