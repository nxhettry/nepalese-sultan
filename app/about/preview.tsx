import Image from "next/image";
import { Button } from "@/components/ui/button";

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
    <section className="py-20 bg-orange-100">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        OUR <span className="text-green">SPECIALTY</span> CUTS
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {products.map((p, i) => (
          <div
            key={i}
            className="relative bg-orange-50 rounded-xl overflow-hidden shadow-lg group"
          >
            <div className="relative w-full h-56">
              <Image src={p.img} alt={p.name} fill className="object-contain" />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4 opacity-0  transition">
              <h3 className="text-lg font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Button className="bg-green cursor-pointer hover:bg-green-900 text-white px-8 py-3 rounded-lg">
          See Full Range
        </Button>
      </div>
    </section>
  );
};
