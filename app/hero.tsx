"use client";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 1, rotate: 0 },
    visible: {
      opacity: 1,
      scale: 0.8,
      rotate: 12,
      transition: { duration: 1, ease: "easeOut", delay: 0.5 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-slate-900"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/40 z-0" />

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center py-16 lg:py-24">
          <motion.div
            className="space-y-8 lg:space-y-10"
            variants={containerVariants as Variants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-6">
              <motion.p
                className="text-orange-500 text-base sm:text-lg font-semibold tracking-widest uppercase"
                variants={textVariants as Variants}
              >
                Nepalese <span className="text-white">Sultan</span> Butcher
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] text-balance"
                variants={textVariants as Variants}
              >
                <span className="block">PREMIUM</span>
                <span className="block">QUALITY</span>
                <span className="block text-orange-500">BUTCHERS.</span>
              </motion.h1>

              <motion.p
                className="text-gray-200 text-lg sm:text-xl leading-relaxed max-w-xl font-medium"
                variants={textVariants as Variants}
              >
                Experience the best of Nepal{"'"}s meat selection right here in
                Australia. Nepalese Sultan Butcher in{" "}
                <span className="text-orange-400 font-semibold hover:text-orange-300 transition-colors cursor-pointer">
                  Glenroy
                </span>{" "}
                is your source for premium cuts of goat, chicken, lamb, and
                buff.
              </motion.p>
            </div>

            <motion.div variants={textVariants as Variants} className="pt-6">
              <Button
                size="lg"
                className="
                  bg-orange-600 
                  hover:bg-orange-700 
                  text-white 
                  font-bold 
                  tracking-wide 
                  px-10 
                  py-4 
                  text-lg
                  rounded-lg
                  shadow-xl
                  hover:shadow-2xl
                  hover:scale-105
                  transition-all
                  duration-300
                  border-0
                  uppercase
                "
              >
                View Products
              </Button>
            </motion.div>
          </motion.div>

          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <motion.div
              className="relative"
              variants={imageVariants as Variants}
              initial="hidden"
              animate="visible"
            >
              <Image
                src="/dagger.png"
                width={500}
                height={500}
                alt="Premium T-bone steak on wooden cutting board with cleaver and seasonings"
                className="w-full max-w-md lg:max-w-lg xl:max-w-2xl h-auto object-cover rounded-lg rotate-12 scale-110 lg:scale-150 drop-shadow-2xl"
                draggable={false}
                priority
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center hover:border-white/60 transition-colors">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
