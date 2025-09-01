"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, Variants } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const ProductsPreview = () => {
  const products = [
    {
      name: "Mutton",
      desc: "Tender cuts perfect for curries.",
      img: "/mutton.png",
    },
    {
      name: "Chicken",
      desc: "Whole, breast & thigh — fresh daily.",
      img: "/chicken.png",
    },
    {
      name: "Pork",
      desc: "Ideal for momos & sekwa dishes.",
      img: "/pork.png",
    },
    {
      name: "Lamb",
      desc: "Premium cuts for grills & roasts.",
      img: "/lamb.png",
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 bg-orange-100"
    >
      <motion.h2
        variants={itemVariants as Variants}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        OUR <span className="text-green">SPECIALTY</span> CUTS
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6"
      >
        {products.map((p, i) => (
          <motion.div
            key={i}
            variants={itemVariants as Variants}
            whileHover={{ scale: 1.05 }}
            className="relative bg-orange-50 rounded-xl overflow-hidden shadow-lg group cursor-pointer"
          >
            <div className="relative w-full h-56">
              <Image
                src={p.img}
                alt={p.name}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black/60 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition duration-300">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants as Variants}
        className="flex justify-center mt-12"
      >
        <Button className="bg-green cursor-pointer hover:bg-green-900 text-white px-8 py-3 rounded-lg">
          See Full Range
        </Button>
      </motion.div>
    </motion.section>
  );
};
