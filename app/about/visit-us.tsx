"use client";
import { MapPin, Navigation } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export const VisitUs = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 bg-black text-white"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-8"
      >
        COME <span className="text-orange-500">VISIT</span> US
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="max-w-4.5xl mx-auto text-center px-6 flex flex-col items-center gap-4"
      >
        <motion.div variants={itemVariants}>
          <MapPin className="w-10 h-10 text-green-600 mx-auto mb-4" />
        </motion.div>

        <motion.p variants={itemVariants} className="text-lg mb-2">
          📍 Located in the heart of Glenroy
        </motion.p>

        <motion.p variants={itemVariants} className="text-gray-400 mb-6">
          <strong>Opening Hours:</strong> <br />
          Mon–Sat: 8 AM – 7 PM <br />
          Sun: 9 AM – 5 PM
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="w-4/5 h-[30rem] rounded-xl overflow-hidden border border-neutral-800 shadow-lg mb-6"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.123456789!2d144.9123456!3d-37.7123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s777%20Pascoe%20Vale%20Road%2C%20Glenroy%20VIC%203046!5e0!3m2!1sen!2sau!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>

        <motion.div variants={itemVariants}>
          <Button
            className="w-64 bg-green hover:bg-green-900 text-white font-medium py-6 mt-6 hover:scale-105"
            asChild
          >
            <a
              href="https://maps.google.com/?q=777+Pascoe+Vale+Road,+Glenroy+VIC+3046"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
