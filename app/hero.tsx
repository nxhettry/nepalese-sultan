import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center  py-16">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-orange text-lg tracking-wider uppercase text-montse font-bold">
                Nepalese <span className="text-white"> Sultan</span> Butcher
              </p>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                <span className="font-serif">PREMIUM QUALITY BUTCHERS.</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Experience the best of Nepal{"'"}s meat selection right here in
                Australia. Nepalese Sultan Butcher in <span className="text-orange cursor-pointer">Glenroy</span> is your source for
                premium cuts of goat, chicken, lamb, and buff.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-white bg-orange hover:bg-orange-700 hover:text-white cursor-pointer font-semibold tracking-wider px-8 py-3"
              >
                VIEW PRODUCTS
              </Button>
            </div>
          </div>

          <div className="relative lg:justify-self-end">
            <div className="relative">
              <Image
                src="/dagger.png"
                width={500}
                height={500}
                alt="Premium T-bone steak on wooden cutting board with cleaver and seasonings"
                className="w-full max-w-2xl h-auto object-cover rounded-lg rotate-12 scale-150"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
