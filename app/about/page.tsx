import { Hero } from "./hero";
import { ProductsPreview } from "./preview";
import { OurPromise } from "./promise";
import TeamSection from "./team";
import { VisitUs } from "./visit-us";

export default function AboutPage() {
  return (
    <div>
      <Hero />
      <TeamSection />
      <OurPromise />
      <ProductsPreview />
      <VisitUs />
    </div>
  );
}
