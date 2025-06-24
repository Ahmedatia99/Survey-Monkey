import React from "react";

const FeatureCard = ({ title, icon, description, className, children }) => {
  return (
    <div
      className={`flex flex-col justify-center items-center bg-[#BF4EE81F] px-5 py-10 rounded-lg ${className}`}
      key={title}
    >
      {icon}
      <h1 className="text-purple dark:text-white font-bold mt-3 mb-2 text-lg">
        {title}
      </h1>
      <p className="text-sm text-gray-600    font-semibold dark:text-gray-400 break-words w-full">
        {description}
      </p>
      {children && <>{children}</>}
    </div>
  );
};

export default FeatureCard;
