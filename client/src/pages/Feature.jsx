
import { FeaturesList } from "../components/features/FeaturesList";
import HeroSection from "../components/features/HeroSection";

const Feature = () => {
  return (
    <section className="container mx-auto px-5">
      <HeroSection />
      <FeaturesList/>
    </section>
  );
};

export default Feature;
