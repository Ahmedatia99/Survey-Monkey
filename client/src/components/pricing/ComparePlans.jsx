import React from "react"
import { Check, X } from "lucide-react"

export default function ComparePlans() {
  const plans = ["Basic", "Professional", "Enterprise"]

  const features = [
    {
      section: "Survey Creation",
      items: [
        { label: "Custom survey themes", values: [true, true, true] },
        { label: "Question logic & branching", values: [false, true, true] },
        { label: "Custom branding", values: [false, true, true] }
      ]
    },
    {
      section: "Data Collection",
      items: [
        { label: "Responses per survey", values: ["100", "1000", "Unlimited"] },
        { label: "File uploads", values: [false, true, true] },
        { label: "Offline data collection", values: [false, false, true] }
      ]
    },
    {
      section: "Analysis & Reporting",
      items: [
        { label: "Basic analytics", values: [false, true, true] },
        { label: "Advanced analytics", values: [false, true, true] },
        { label: "Custom reports", values: [false, true, true] }
      ]
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/*the address */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-purple-700 text-[#7616ec]">Compare Plans</h2>
        <p className="text-sm text-[#7616ec]">Find the plan that's right for you</p>
      </div>

      {/* the table */}
      <div className="overflow-x-auto rounded-xl">
        <table className="min-w-full table-auto border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left p-4 font-medium text-gray-700 ">Features</th>
              {plans.map((plan, i) => (
                <th key={i} className="p-4 text-left font-semibold text-black">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {features.map((section, i) => (
              <React.Fragment key={i}>
                <tr className="bg-purple-50 text-purple-800 font-semibold ">
                  <td colSpan={4} className="p-3 bg-[#f2e7f1]">
                    {section.section}
                  </td>
                </tr>

              
                {section.items.map((item, j) => (
                  <tr key={j} className="border-b border-gray-200 ">
                    <td className="p-3 text-[#000000] whitespace-nowrap ">{item.label}</td>
                    {item.values.map((value, k) => (
                      <td key={k} className="p-3">
                        {typeof value === "boolean" ? value ? <Check className="w-4 h-4 text-green-600" /> : <X className="w-4 h-4 text-[#777]" /> : <span className="text-black font-medium">{value}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

