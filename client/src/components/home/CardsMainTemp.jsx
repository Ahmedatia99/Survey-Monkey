import React from "react";
import DetailsTemplateCard from "@/components/comman/DetailsTemplateCard";
import { BriefcaseBusiness, GraduationCap, PersonStanding } from "lucide-react";
const CardsMainTemp = () => {
  const cardData = [
    {
      icon: (
        <BriefcaseBusiness strokeWidth={2} size={20} className="text-purple" />
      ),
      tempTitle: "Business",
      cardImg: "./image/template-card-1.png",
      cardHeading: "Employee Satisfaction Survey",
      cardDescription:
        "Gather feedback about workplace satisfaction and employee engagement.",
      quesNum: 25,
    },
    {
      icon: (
        <PersonStanding strokeWidth={2} size={20} className="text-purple" />
      ),
      tempTitle: "Human Resource",
      cardImg: "./image/template-card-2.png",
      cardHeading: "Course Evaluation Form",
      cardDescription:
        "Collect student feedback about course content and instruction.",
      quesNum: 20,
    },
    {
      icon: <GraduationCap strokeWidth={2} size={20} className="text-purple" />,
      tempTitle: "Education",
      cardImg: "./image/template-card-3.png",
      cardHeading: "Patient Satisfaction Survey",
      cardDescription:
        "Evaluate patient experience and healthcare service quality.",
      quesNum: 30,
    },
    {
      icon: (
        <PersonStanding strokeWidth={2} size={20} className="text-purple" />
      ),
      tempTitle: "Business",
      cardImg: "./image/template-card-4.png",
      cardHeading: "Employee Satisfaction Survey",
      cardDescription:
        "Gather feedback about workplace satisfaction and employee engagement.",
      quesNum: 25,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-5">
      {cardData.map((card, index) => (
        <DetailsTemplateCard
          key={index}
          icon={card.icon}
          tempTitle={card.tempTitle}
          cardImg={card.cardImg}
          cardHeading={card.cardHeading}
          cardDescription={card.cardDescription}
          quesNum={card.quesNum}
        />
      ))}
    </div>
  );
};

export default CardsMainTemp;
