"use client";
import { FaHandPointUp, FaShoppingCart, FaTruck } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
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
            From Our Block to Your Kitchen
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
            We follow a simple and efficient process to ensure the highest
            quality cuts are delivered fresh to you.
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default AboutSection;
