import React from "react";
import FeatureCard from "@/components/comman/FeatureCard";
import SectionTitle from "@/components/comman/SectionTitle";
import {
  SquarePen,
  SquareMenu,
  Waypoints,
  ChartNoAxesCombined,
  Zap,
  ShieldCheck,
} from "lucide-react";
const Feature = () => {
  const iconClassName = "text-purple font-bold ";
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
    <section className="pb-20 pt-20 md:pt-32">
      <SectionTitle
        classname="text-purple"
        leftTitle="Powerful"
        rightTitle="collection"
        subTitle="features to transform your data"
        description="Discover the powerful features that make our survey platform the best choice for your data collection needs."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
        {icons.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            className="text-center"
          />
        ))}
      </div>
    </section>
  );
};

export default Feature;
