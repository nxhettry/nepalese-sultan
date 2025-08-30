"use client";
import type { JSX } from "react";
import { FaHandPointUp, FaShoppingCart, FaTruck } from "react-icons/fa";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const CARD_ITEMS = [
  {
    title: "Choose Your Cut",
    description:
      "Browse our selection of fresh, high-quality meats, sourced daily from local farms and trusted suppliers.",
    icon: <FaHandPointUp />,
  },
  {
    title: "Place Your Order",
    description:
      "Easily add your chosen cuts to your cart and complete your purchase with our streamlined, secure checkout.",
    icon: <FaShoppingCart />,
  },
  {
    title: "Delivered Fresh",
    description:
      "We carefully package and deliver your order right to your doorstep, ensuring it arrives in perfect condition.",
    icon: <FaTruck />,
  },
];

const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-slate-50 w-full py-16 px-4" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            From Our Block to Your Door
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We follow a simple and efficient process to ensure the highest
            quality cuts are delivered fresh to you.
          </p>
        </div>

        <motion.div
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {CARD_ITEMS.map((item, idx) => (
            <Stepcard
              key={idx}
              idx={idx}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type StepcardProps = {
  title: string;
  description: string;
  icon: JSX.Element;
  idx: number;
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Stepcard = ({ title, description, icon, idx }: StepcardProps) => {
  return (
    <motion.div
      className="relative bg-white rounded-xl p-8 shadow-lg transition-shadow duration-300 border border-slate-200 hover:border-orange-500"
      variants={itemVariants as Variants}
    >
      <div className="absolute -top-4 left-8">
        <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-md">
          {idx + 1}
        </div>
      </div>

      <div className="relative w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-6 mt-4 before:absolute before:w-full before:h-full before:rounded-full before:bg-orange-200 before:rotate-45 before:mix-blend-multiply before:opacity-30">
        <div className="text-orange-600 text-3xl z-10">{icon}</div>
      </div>

      <div className="space-y-3">
        <h3 className="text-xl font-bold text-slate-900">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default AboutSection;
