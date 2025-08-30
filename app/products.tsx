"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PRODUCT_CARDS = [
  {
    title: "CUTS OF CHICKEN",
    imageSrc: "/chicken.png",
  },
  {
    title: "CUTS OF MUTTON",
    imageSrc: "/mutton.png",
  },
  {
    title: "CUTS OF LAMB",
    imageSrc: "/lamb.png",
  },
  {
    title: "CUTS OF PORK",
    imageSrc: "/pork.png",
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
        {PRODUCT_CARDS.map((item) => (
          <ProductCard
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </section>

      <motion.button className="cursor-pointer hover:bg-green-900 font-bold bg-green text-white py-2 px-4 rounded-md">
        Order Now
      </motion.button>
    </section>
  );
};

type ProductCardProps = {
  title: string;
  imageSrc: string;
};

const ProductCard = ({ title, imageSrc }: ProductCardProps) => {
  const parts = title.split(" ");
  const firstPart = parts.slice(0, 1).join(" ");
  const secondPart = parts.slice(2).join(" ");

  return (
    <div className="hover:border-green-700 shadow-md border border-white bg-white min-h-40 rounded-xl p-3 flex flex-col justify-between gap-6 items-center">
      <h1 className="text-xl font-bold font-serif flex items-center gap-x-1">
        <span>{firstPart}</span>
        <span className="text-base font-bold border-b-2 border-green-700 py-1 px-1.5 text-green">
          OF
        </span>
        <span>{secondPart}</span>
      </h1>
      <Image
        src={imageSrc}
        alt={title}
        height={200}
        width={200}
        className="object-contain h-36 scale-150 w-auto"
      />
      <div className="h-4"></div>
    </div>
  );
};

export default ProductsSection;
