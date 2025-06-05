import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
const TemplateCard = ({ icon, title, tempNum }) => {
  return (
    <div className="bg-[#BF4EE81F] px-5 py-8 rounded-xl shadow-md">
      <div className="flex items-start gap-2 mb-3">
        {icon}
        <span className="text-midnight dark:text-white font-bold">{title}</span>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-gray-600 dark:text-white text-sm font-semibold">
          {tempNum} Templates
        </p>
        <Button className="text-purple bg-transparent hover:bg-transparent shadow-none text-sm flex justify-center items-center gap-2">
          Show <MoveRight strokeWidth={2.25} className="text-purple" />
        </Button>
      </div>
    </div>
  );
};

export default TemplateCard;
