import AboutSection from "./about";
import { Hero } from "./hero";
import ProductsSection from "./products";

export default function Home() {
  return (
    <div>
      <Hero />
      <ProductsSection />
      <AboutSection />
    </div>
  );
}
