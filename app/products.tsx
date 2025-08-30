"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PRODUCT_CARDS = [
  {
    title: "CUTS OF CHICKEN",
    imageSrc: "/chicken.png",
    cuts: ["Curry Cut", "Biryani Cut", "BBQ Cut", "Tandoori Cut"],
  },
  {
    title: "CUTS OF MUTTON",
    imageSrc: "/mutton.png",
    cuts: ["Curry Cut", "Biryani Cut", "Roast Cut", "Stew Cut"],
  },
  {
    title: "CUTS OF LAMB",
    imageSrc: "/lamb.png",
    cuts: ["Curry Cut", "BBQ Cut", "Chops", "Leg Cut"],
  },
  {
    title: "CUTS OF PORK",
    imageSrc: "/pork.png",
    cuts: ["BBQ Cut", "Roast Cut", "Chops", "Belly Cut"],
  },
];

const ProductsSection = () => {
  return (
    <section className="w-full bg-orange-200 flex flex-col items-center gap-12 py-12 px-4">
      <motion.h1 className="max-w-3xl text-3xl lg:text-4xl xl:text-5xl font-bold text-green leading-tight text-center">
        <span className="font-serif ">
          QUALITY MEAT <br /> FOR ALL OCCASIONS.
        </span>
        <p className="text-sm text-gray-500 pt-3">
          Whatever the occasion, we{"'"}ve got you covered with a large
          selection of Premium Quality Meats
        </p>
      </motion.h1>
      <div className="h-[2px] border border-green-700 w-full max-w-7xl mx-auto my-4" />

      <section className="w-4/5 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl">
        {PRODUCT_CARDS.map((item, index) => (
          <ProductCard
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
            cuts={item.cuts}
            delay={index * 0.1}
          />
        ))}
      </section>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="cursor-pointer hover:bg-green-900 font-bold bg-green text-white py-3 px-6 rounded-md transition-all duration-200"
      >
        Contact Now
      </motion.button>
    </section>
  );
};

type ProductCardProps = {
  title: string;
  imageSrc: string;
  cuts: string[];
  delay?: number;
};

const ProductCard = ({
  title,
  imageSrc,
  cuts,
  delay = 0,
}: ProductCardProps) => {
  const parts = title.split(" ");
  const firstPart = parts.slice(0, 1).join(" ");
  const secondPart = parts.slice(2).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="hover:border-green-700 hover:shadow-lg shadow-md border border-white bg-white min-h-48 rounded-xl p-4 flex flex-col justify-between gap-4 items-center transition-all duration-300"
    >
      <h1 className="text-xl font-bold font-serif flex items-center gap-x-1">
        <span>{firstPart}</span>
        <span className="text-base font-bold border-b-2 border-green-700 py-1 px-1.5 text-green">
          OF
        </span>
        <span>{secondPart}</span>
      </h1>

      <Image
        src={imageSrc || "/placeholder.svg"}
        alt={title}
        height={200}
        width={200}
        className="object-contain h-32 scale-150 w-auto"
      />

      <div className="flex flex-wrap gap-1 justify-center">
        {cuts.map((cut) => (
          <span
            key={cut}
            className="text-xs bg-orange-50 text-green-800 px-2 py-1 rounded-full font-medium"
          >
            {cut}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsSection;
