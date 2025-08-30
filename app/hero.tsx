import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-black">
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-orange text-lg font-medium tracking-wider uppercase">
                Nepalese Sultan Butcher
              </p>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                <span className="font-serif">PREMIUM QUALITY BUTCHERS.</span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                Located in Benavista, close to Puerto Banus Liam{"'"}s Quality
                Meats is your one stop shop for premium cuts of meat on the
                coast.
              </p>
            </div>

            <div className="pt-4">
              <Button
                variant="outline"
                size="lg"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent font-semibold tracking-wider px-8 py-3"
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
                className="w-full max-w-2xl h-auto object-cover rounded-lg"
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
