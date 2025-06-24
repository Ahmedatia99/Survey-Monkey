import React from 'react'
import PricingHeroSection from '../components/pricing/PricingHeroSection'
import PricingSection from '../components/pricing/PricingSection'
import ComparePlans from '../components/pricing/ComparePlans'
const Pricing = () => {
  return (
    <section className="container mx-auto px-5 overflow-hidden">
      <PricingHeroSection/>
      <PricingSection/>
      <ComparePlans/>
      </section>
  )
}

export default Pricing