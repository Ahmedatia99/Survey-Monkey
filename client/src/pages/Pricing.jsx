import React from 'react'
import PricingHeroSection from '../components/pricing/PricingHeroSection'
import PricingSection from '../components/pricing/PricingSection'
import ComparePlans from '../components/pricing/ComparePlans'
const PricingPage = () => {
  return (
    <section className="container mx-auto px-5  pt-28">
      <PricingHeroSection/>
      <PricingSection/>
      <ComparePlans/>
    </section>
  );
};

export default PricingPage;
