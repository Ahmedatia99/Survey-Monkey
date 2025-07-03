import ActionBanner from "../components/features/ActionBanner";
import CreateSurvey from "../components/features/CreateSurvey";
import CustomerNeeds from "../components/features/CustomerNeeds";
import { FeaturesList } from "../components/features/FeaturesList";
import HeroSection from "../components/features/HeroSection";

const Feature = () => {
  return (
    <>
      <section className="container mx-auto px-5">
        <HeroSection />
        <FeaturesList />
        <CustomerNeeds />
        <ActionBanner />
      </section>
      <CreateSurvey />
    </>
  );
};

export default Feature;
