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
    <section className="w-full bg-gradient-to-b from-orange-100 to-orange-200 flex flex-col items-center gap-10 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-800 leading-tight">
          <span className="font-serif text-balance">
            QUALITY MEAT <br />
            <span className="text-emerald-600">FOR ALL OCCASIONS</span>
          </span>
        </h2>
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Whatever the occasion, we{"'"}ve got you covered with a large selection of
          Premium Quality Meats
        </p>
      </motion.div>

      <div className="h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent w-full max-w-4xl" />

      <section className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {PRODUCT_CARDS.map((item, index) => (
          <ProductCard
            key={item.title}
            title={item.title}
            imageSrc={item.imageSrc}
            cuts={item.cuts}
            delay={index * 0.15}
          />
        ))}
      </section>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl border border-orange-100 hover:border-emerald-200 transition-all duration-300 flex flex-col items-center gap-6 min-h-[320px]"
    >
      <h3 className="text-xl font-bold font-serif text-center leading-tight">
        <span className="text-slate-700">{firstPart}</span>
        <span className="mx-2 text-sm font-bold border-b-2 border-emerald-600 py-1 px-2 text-emerald-700 bg-emerald-50 rounded">
          OF
        </span>
        <span className="text-slate-700">{secondPart}</span>
      </h3>

      <div className="flex-1 flex items-center justify-center p-4">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          height={200}
          width={200}
          className="object-cover h-64 w-auto group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-wrap gap-2 justify-center">
        {cuts.map((cut, index) => (
          <motion.span
            key={cut}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: delay + index * 0.1 }}
            className="text-xs bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full font-medium border border-emerald-100 hover:bg-emerald-100 transition-colors duration-200"
          >
            {cut}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductsSection;
