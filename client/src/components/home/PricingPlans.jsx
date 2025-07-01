import React from "react";
import PlanCard from "@/components/comman/PlanCard";
import SectionTitle from "@/components/comman/SectionTitle";

const plans = [
  {
    name: "standard",
    price: "Free",
    features: ["Unlimited everything", "Advanced security"],
  },
  {
    name: "Professional",
    price: "$35",
    period: "/month",
    features: [
      "Unlimited everything",
      "Advanced security",
      "API access",
      "Dedicated support",
      "Custom integration",
    ],
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    features: [
      "Unlimited everything",
      "Advanced security",
      "API access",
      "Dedicated support",
      "Custom integration",
    ],
  },
];

const PricingPlans = () => {
  return (
    <section className="pb-20 px-4 text-center">
      <SectionTitle
        leftTitle="Choose"
        subTitle="Your Plan"
        classname="text-purple"
        description="Get the perfect plan for your survey needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-10">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} showCheckmarks={true}/>
        ))}
      </div>
    </section>
  );
};

export default PricingPlans;
