import React from "react";
import { Button } from "@/components/ui/button";

const DetailsTemplateCard = ({
  icon,
  tempTitle,
  cardImg,
  cardHeading,
  cardDescription,
  quesNum,
}) => {
  return (
    <div className="w-full sm:max-w-sm md:max-w-md bg-white dark:bg-[#BF4EE81F] rounded-xl shadow-lg p-3">
      <div className="w-fit flex items-center gap-2 mb-4 bg-[#BF4EE81F] px-2 py-1 rounded-lg text-midnight dark:text-white">
        {icon} <h2 className="text-sm font-semibold">{tempTitle}</h2>
      </div>
      <div>
        <img
          src={cardImg}
          alt={cardHeading || "survey template"}
          className="aspect-auto w-full"
        />
        <h2 className="text-midnight dark:text-purple text-xl font-semibold my-3">
          {cardHeading}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          {cardDescription}
        </p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-sm text-gray-600 dark:text-white font-semibold">
            {quesNum} Questions
          </span>
          <Button className="bg-transparent hover:bg-transparent text-purple shadow-none">
            Use Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DetailsTemplateCard;
