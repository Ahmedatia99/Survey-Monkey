import React from "react";
import FeatureCard from "@/components/comman/FeatureCard";
import {
  SquarePen,
  SquareMenu,
  Waypoints,
  ChartNoAxesCombined,
  Zap,
  ShieldCheck,
} from "lucide-react";
const Feature = () => {
  const iconClassName = "text-purple font-bold";
  const icons = [
    {
      icon: <SquarePen strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Intuitive Survey Creation",
      description:
        "Easily design surveys with a user-friendly interface and customizable templates.",
    },
    {
      icon: (
        <SquareMenu strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Advanced Survey Management",
      description:
        "Organize and manage your surveys efficiently with powerful tools and features.",
    },
    {
      icon: <Waypoints strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Real-time Data Tracking",
      description:
        "Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills.",
    },
    {
      icon: (
        <ChartNoAxesCombined
          strokeWidth={2.5}
          size={30}
          className={iconClassName}
        />
      ),
      title: "Comprehensive Analytics",
      description:
        "Gain insights with detailed analytics and reporting tools to make data-driven decisions.",
    },
    {
      icon: <Zap strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Lightning-fast Insights",
      description:
        "Get instant feedback and insights with our real-time data processing capabilities.",
    },
    {
      icon: (
        <ShieldCheck strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Secure Data Collection",
      description:
        "Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills.",
    },
  ];
  return (
    <section className="py-20">
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="sup-heading max-w-3xl text-3xl lg:text-5xl md:text-4xl">
          <span className="heading mr-2">Powerful</span>
          features to transform your data
          <span className="heading ml-2">collection</span>
        </h1>
        <p className="sup-info text-sm md:text-lg">
          Everything you need to create, distribute, and analyze surveys that
          deliver actionable insights.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
        {icons.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            description={description}
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
