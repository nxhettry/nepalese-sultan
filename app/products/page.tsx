"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Star, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";

const meatProducts = [
  {
    id: 1,
    name: "Premium Mutton",
    description:
      "Fresh, tender mutton cuts from grass-fed goats. Perfect for traditional Nepalese curries and grills.",
    image: "/mutton.png",
    price: "From $28/kg",
    features: ["Grass-fed", "Halal certified", "Fresh daily"],
    cuts: ["Curry Cut", "Biryani Cut", "Roast Cut", "Stew Cut"],
    popular: true,
  },
  {
    id: 2,
    name: "Free-Range Chicken",
    description:
      "Succulent free-range chicken, raised without antibiotics. Ideal for family meals and special occasions.",
    image: "/chicken.png",
    price: "From $18/kg",
    features: ["Free-range", "Antibiotic-free", "Locally sourced"],
    cuts: ["Curry Cut", "Biryani Cut", "BBQ Cut", "Tandoori Cut"],
  },
  {
    id: 3,
    name: "Premium Lamb",
    description:
      "Premium lamb cuts from carefully selected sheep. Rich flavor and tenderness for your special meals.",
    image: "/lamb.png",
    price: "From $32/kg",
    features: ["Premium grade", "Tender cuts", "Fresh daily"],
    cuts: ["Curry Cut", "BBQ Cut", "Chops", "Leg Cut"],
  },
  {
    id: 4,
    name: "Heritage Pork",
    description:
      "Traditional pork cuts from heritage breeds. Perfect for roasts, chops, and specialty preparations.",
    image: "/pork.png",
    price: "From $22/kg",
    features: ["Heritage breed", "Natural feed", "Tender cuts"],
    cuts: ["BBQ Cut", "Roast Cut", "Chops", "Belly Cut"],
  },
];

type ProductCardProps = {
  product: (typeof meatProducts)[0];
  delay?: number;
};

const ProductCard = ({ product, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="bg-orange-50 rounded-xl p-6 shadow-lg hover:shadow-xl border-2 border-orange-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-4 min-h-[400px]"
    >
      {product.popular && (
        <Badge className="absolute top-3 left-3 z-10 bg-orange-600 text-white px-2 py-1 text-xs font-bold shadow-lg">
          <Star className="w-3 h-3 mr-1 fill-current" />
          Most Popular
        </Badge>
      )}

      <div className="flex-1 flex items-center justify-center p-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.name}
          height={150}
          width={150}
          className="object-contain h-32 w-auto group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      <div className="w-full space-y-4 text-center">
        <h3 className="text-xl font-bold text-green font-serif">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        <div className="text-center">
          <p className="text-lg font-bold text-orange">{product.price}</p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center">
          {product.cuts.map((cut, index) => (
            <motion.span
              key={cut}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: delay + index * 0.1 }}
              className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-full font-medium border border-emerald-100 hover:bg-emerald-100 transition-colors duration-200"
            >
              {cut}
            </motion.span>
          ))}
        </div>

        <div className="flex flex-wrap gap-1 justify-center">
          {product.features.map((feature, idx) => (
            <Badge
              key={idx}
              className="bg-orange-100 text-orange-700 border border-orange-200 px-2 py-0.5 text-xs"
            >
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Unique Products Hero Section - Butcher Counter Style */}
      <section
        className="relative min-h-screen overflow-hidden "
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {/* Butcher Shop Counter Style Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block backdrop-blur-sm border border-amber-500/30 rounded-full px-6 py-3 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-300 font-semibold tracking-wider uppercase text-sm">
                🥩 Fresh from our butcher shop
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-8xl font-bold text-white leading-none font-serif mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">MEAT</span>
              <span className="block text-transparent bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text">
                MARKET
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Premium cuts, traditional flavors, modern quality standards
            </motion.p>
          </div>

          {/* Floating Product Cards Preview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              {
                name: "Goat",
                image: "/mutton.png",
                price: "From $15/kg",
                delay: 0.2,
              },
              {
                name: "Chicken",
                image: "/chicken.png",
                price: "From $8/kg",
                delay: 0.4,
              },
              {
                name: "Lamb",
                image: "/lamb.png",
                price: "From $12/kg",
                delay: 0.6,
              },
              {
                name: "Pork",
                image: "/pork.png",
                price: "From $10/kg",
                delay: 0.8,
              },
            ].map((product) => (
              <motion.div
                key={product.name}
                className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:bg-white/15"
                initial={{ opacity: 0, y: 50, rotateY: -30 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: product.delay }}
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="w-full h-24 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-orange-300 text-sm font-semibold">
                  {product.price}
                </p>
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center pb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-bold px-12 py-4 text-lg rounded-full shadow-2xl hover:shadow-orange-500/25 hover:scale-105 transition-all duration-300 border-0"
            >
              Explore Full Collection ↓
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 shadow-xs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground font-serif">
              Our Premium <span className="text-orange">Meat</span> Selection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Fresh, quality cuts prepared daily with traditional Nepalese
              expertise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {meatProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cuts & Services Section */}
      <section
        className="py-20 bg-black/90 text-white"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance font-serif">
              CUSTOM <span className="text-orange-500">CUTS</span> & SERVICES
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto text-pretty">
              Specialized cutting services to meet your exact needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Wedding & Event Catering",
                description:
                  "Large quantity orders with customized cutting for your special celebrations",
                features: [
                  "Bulk orders",
                  "Custom portions",
                  "Event delivery",
                  "Competitive pricing",
                ],
              },
              {
                title: "Restaurant Supply",
                description:
                  "Professional cuts and portions designed specifically for commercial kitchens",
                features: [
                  "Consistent quality",
                  "Regular delivery",
                  "Commercial pricing",
                  "Custom specifications",
                ],
              },
              {
                title: "Traditional Preparations",
                description:
                  "Authentic Nepalese and South Asian cuts following traditional methods",
                features: [
                  "Cultural cuts",
                  "Traditional spices",
                  "Authentic methods",
                  "Family recipes",
                ],
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.7 }}
                whileHover={{ scale: 1.05 }}
                className="p-8 bg-orange-50 rounded-xl border border-neutral-800 text-center shadow-lg"
              >
                <h3 className="text-xl font-semibold text-green mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-gray-500 text-sm justify-center"
                    >
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Visit Us */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 shadow-xs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground font-serif">
              Visit Our <span className="text-green">Shop</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Located in the heart of Glenroy, we&apos;re easy to find and
              always ready to serve you
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-12 py-6 text-xl font-medium shadow-2xl rounded-lg hover:scale-105 transition-all duration-300 border-0 uppercase tracking-wide"
            >
              <Phone className="w-6 h-6 mr-3" />
              Call: (03) 9380 5568
            </Button>
            <Button
              size="lg"
              className="bg-green hover:bg-green-900 text-white font-medium px-12 py-6 text-xl rounded-lg hover:scale-105 transition-all duration-300"
            >
              <MapPin className="w-6 h-6 mr-3" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
