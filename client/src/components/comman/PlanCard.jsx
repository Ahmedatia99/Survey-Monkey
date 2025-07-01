import React from "react"

const PlanCard = ({ name, price, period, features, description, showCheckmarks, variant = "default", badge, btnText = "Contact Sales" }) => {
  const isHighlighted = variant === "highlighted"
  const isBordered = variant === "bordered"

  return (
    <div
      className={`
    relative p-6 flex flex-col justify-between rounded-xl shadow-md 
    ${isHighlighted ? "bg-[#7616ec] text-white -translate-y-5" : ""}
    ${isBordered ? "border border-[#7716ec] text-[#490f8f]" : ""}
    ${!isHighlighted && !isBordered ? "bg-gray-50 dark:bg-[#BF4EE81F]" : ""}
  `}
    >
      {badge && <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0abd85] text-white text-m font-semibold px-6 py-1 rounded-full shadow">{badge}</span>}
      <div>
        <h3 className="text-xl font-semibold mb-2 capitalize">{name}</h3>
        <div className="text-4xl font-bold">
          {price}
          {period && (
            <span
              className={`text-base font-medium
              dark:text-gray-300 ml-1
             ${isHighlighted ? "text-white" : ""}
             ${isBordered ? "text-[#490f8f]" : ""}
             ${!isBordered && !isHighlighted ? "text-gray-500" : ""}
             `}
            >
              {period}
            </span>
          )}
        </div>
        {description && (
          <p
            className={`mt-2 leading-relaxed $
          {isHighlighted ? "text-white" : "text-[#490f8f]"}`}
          >
            {description}
          </p>
        )}
        <ul
          className={`space-y-2 text-left
        ${isBordered || isHighlighted ? "mt-2" : "mt-6"}
        ${showCheckmarks ? "" : "list-disc list-inside"}
        `}
        >
          {features.map((feature, i) => (
            <li
              key={i}
              className={` ${showCheckmarks ? "flex items-center gap-2 " : "pl-5 "}  text-sm dark:text-gray-300 text-[#490f8f]
              ${isHighlighted ? "text-white" : ""}
              ${isBordered ? "text-[#490f8f]" : ""}
              ${!isBordered && !isHighlighted ? "text-gray-700" : ""}
              `}
            >
              {showCheckmarks && <span className="text-green-500 text-lg">✓</span>}
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        className={`mt-6 py-2 rounded-lg font-semibold hover:opacity-90
      ${isBordered ? "gradient text-white" : ""}
      ${isHighlighted ? "bg-white text-[#490f8f]" : ""}
      ${!isBordered & !isHighlighted ? "gradient text-white" : ""}
      `}
      >
        {btnText}
      </button>
    </div>
  )
}

export default PlanCard
