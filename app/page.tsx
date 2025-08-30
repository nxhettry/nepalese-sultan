import { Hero } from "./hero";
import ProductsSection from "./products";
import VisitSection from "./visit";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <VisitSection />
    </div>
  );
}
