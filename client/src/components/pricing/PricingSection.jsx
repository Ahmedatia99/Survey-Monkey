import React from "react"
import PlanCard from "@/components/comman/PlanCard"

const plans = [
  {
    name: "Basic",
    price: "$15",
    period: "/month",
    description: " Perfect for individuals and small teams just getting",
    features: ["Up to 10 surveys per month", "100 responses per survey", "Basic survey templates", "Email support", "Export to PDF & CSV", "Basic analytics"],
    variant:'bordered',
    btnText:'Start free trial',
  },
  {
    name: "Professional",
    price: "$39",
    period: "/month",
    description: "Ideal for growing businesses that need more power and features.",
    features: ["Unlimited everything", "1000 responses per survey", "Advanced survey templates", "Priority email support", "Advanced analytics", "Custom branding", "Team collaboration", "API access"],
    variant:"highlighted",
    badge:"Most popular",
    btnText:'Start free trial',
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "For large organizations requiring advanced features and support.",
    features: ["Unlimited everything", "Dedicated account manager", "Custom integration support", "Advanced security features", "SLA guarantees", "Training sessions", "Custom contract terms", "Phone support"],
    variant:'bordered',
 
  }
]

const PricingPlans = () => {
  return (
    <section className="pb-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-28">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </section>
  )
}

export default PricingPlans
