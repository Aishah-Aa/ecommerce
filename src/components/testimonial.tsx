import { Footer } from "./footer"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"

export function Testimonial() {
  return (
    <>
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
      <Footer />
    </>
  )
}
