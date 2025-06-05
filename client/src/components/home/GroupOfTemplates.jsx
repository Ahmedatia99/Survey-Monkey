import React from "react";
import TemplateCard from "@/components/comman/TemplateCard";
import {
  BriefcaseBusiness,
  GraduationCap,
  Star,
  PersonStanding,
} from "lucide-react";
const GroupOfTemplates = () => {
  const iconClass = "text-purple";
  const template = [
    {
      icon: <BriefcaseBusiness strokeWidth={2.5} className={iconClass} />,
      title: "Business",
      tempNum: 42,
    },
    {
      icon: <GraduationCap strokeWidth={2.5} className={iconClass} />,
      title: "Education",
      tempNum: 10,
    },
    {
      icon: <Star strokeWidth={2.5} className={iconClass} />,
      title: "Feedback",
      tempNum: 56,
    },
    {
      icon: <BriefcaseBusiness strokeWidth={2.5} className={iconClass} />,
      title: "Human resource",
      tempNum: 28,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 py-10">
      {template.map((temp, index) => (
        <TemplateCard
          key={index}
          icon={temp.icon}
          title={temp.title}
          tempNum={temp.tempNum}
        />
      ))}
    </div>
  );
};

export default GroupOfTemplates;
