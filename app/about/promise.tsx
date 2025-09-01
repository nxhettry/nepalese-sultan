"use client";
import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

export const OurPromise = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
      className="py-20 bg-black/90 text-white"
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.h2
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold text-center mb-12 font-serif"
      >
        OUR <span className="text-orange-500">PROMISE</span>
      </motion.h2>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center shadow-lg"
        >
          <h3 className="text-xl font-semibold text-green mb-3">Fresh Daily</h3>
          <p className="text-gray-500">
            Only the freshest cuts, prepared every morning for your family.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center shadow-lg"
        >
          <h3 className="text-xl font-semibold text-green mb-3">
            Authentic Cuts
          </h3>
          <p className="text-gray-500">
            Traditional Nepalese style, perfect for curries and grills.
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center shadow-lg"
        >
          <h3 className="text-xl font-semibold text-green mb-3">
            Friendly Service
          </h3>
          <p className="text-gray-500">
            A welcoming local butcher, always here with a smile.
          </p>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
