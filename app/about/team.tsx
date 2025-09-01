"use client";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

const TEAM_MEMBERS = [
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
  { name: "John Doe", role: "Delivery", image: "/team.jpg" },
];

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const TeamSection = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-20 px-4 bg-orange-100">
      
      <motion.div
        className="flex flex-col items-center gap-6 max-w-5xl text-green"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl font-thin font-montse"
          variants={textVariants}
        >
          MEET THE TEAM AT ....
        </motion.h2>
        <motion.h1
          className="text-4xl font-bold font-serif"
          variants={textVariants}
        >
          NEPALESE <span className="text-orange">SULTAN </span>BUTCHER
        </motion.h1>
        <motion.p
          className="text-base text-center font-montse"
          variants={textVariants}
        >
          The Nepalese Butcher Shop is a new business in the heart of Glenroy,
          and we{"'"}re ready to serve you. We are dedicated to providing a wide
          selection of quality meats with friendly and professional service. We
          look forward to becoming your go-to butcher shop.
        </motion.p>
      </motion.div>

      
      <div className="w-[90%] mx-auto bg-orange-50 rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 shadow-lg">
        {TEAM_MEMBERS.map((member, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, y: -6 }}
            className="relative border-green-700 border-b-2 rounded-lg flex justify-center items-center overflow-hidden"
          >
            <Image
              src={member.image}
              height={400}
              width={400}
              alt={member.name}
              className="object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 w-full h-2/4 bg-gradient-to-t from-black/80 to-transparent rounded-b-xl pointer-events-none" />
            <span className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-lg font-bold drop-shadow">
              {member.name}
            </span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white text-sm font-semibold drop-shadow">
              ({member.role})
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
