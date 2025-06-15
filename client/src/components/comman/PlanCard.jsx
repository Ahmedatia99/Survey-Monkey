import React from "react";

const PlanCard = ({ name, price, period, features }) => {
  return (
    <div className="bg-gray-50 dark:bg-[#BF4EE81F] rounded-xl shadow-md p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-semibold mb-2 capitalize">{name}</h3>
        <div className="text-4xl font-bold">
          {price}
          {period && (
            <span className="text-base font-medium text-gray-500 dark:text-gray-300 ml-1">
              {period}
            </span>
          )}
        </div>
        <ul className="mt-6 space-y-2 text-left">
          {features.map((feature, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300"
            >
              <span className="text-green-500 text-lg">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="mt-6 gradient text-white py-2 rounded-lg font-semibold hover:opacity-90">
        Contact Sales
      </button>
    </div>
  );
};

export default PlanCard;
