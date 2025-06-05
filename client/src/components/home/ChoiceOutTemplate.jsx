import React from "react";
import { WandSparkles, SlidersHorizontal, ChartPie } from "lucide-react";
import FeatureCard from "@/components/comman/FeatureCard";
const ChoiceOutTemplate = () => {
  const iconClassName = "text-purple font-bold";
  const icons = [
    {
      icon: (
        <WandSparkles strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Professional Design",
      description: "Expertly  templates that look great on any device.",
    },
    {
      icon: (
        <SlidersHorizontal
          strokeWidth={2.5}
          size={30}
          className={iconClassName}
        />
      ),
      title: "Customizable",
      description: "Easily modify templates to match your needs.",
    },
    {
      icon: <ChartPie strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Advanced Analytics",
      description: "Get powerful insights from your survey responses.",
    },
  ];
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="sup-heading max-w-3xl text-3xl lg:text-5xl md:text-4xl">
          Why Choose Our
          <span className="heading ml-2">Templates?</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
        {icons.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            className="bg-transparent"
          />
        ))}
      </div>
    </section>
  );
};

export default ChoiceOutTemplate;
