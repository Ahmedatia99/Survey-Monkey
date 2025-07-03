import React from "react";
import PricingHeroSection from "../components/pricing/PricingHeroSection";
import PricingSection from "../components/pricing/PricingSection";
import ComparePlans from "../components/pricing/ComparePlans";
import MemberOpinions from "../components/pricing/MemberOpinions";
import GetStarted from "../components/pricing/GetStarted";
const PricingPage = () => {
  return (
    <>
      <section className="container mx-auto px-5">
        <PricingHeroSection />
        <PricingSection />
        <ComparePlans />
      </section>
      <MemberOpinions />
      <GetStarted/>
    </>
  );
};

export default PricingPage;
