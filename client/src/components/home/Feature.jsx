import React from "react";
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
    },
    {
      icon: (
        <SquareMenu strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Advanced Survey Management",
    },
    {
      icon: <Waypoints strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Real-time Data Tracking",
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
    },
    {
      icon: <Zap strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Lightning-fast Insights",
    },
    {
      icon: (
        <ShieldCheck strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Secure Data Collection",
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
        {icons.map(({ icon, title }) => (
          <div
            className="flex flex-col justify-center items-center bg-[#BF4EE81F] px-5 py-10 rounded-lg"
            key={title}
          >
            {icon}
            <h1 className="text-purple font-bold mt-3 mb-2 text-lg">{title}</h1>
            <p className="text-sm text-gray-600 text-center w-auto lg:w-96 font-semibold dark:text-gray-400">
              Drag-and-drop editor with customizable templates to create
              <br />
              professional surveys in minutes.
              <br />
              No technical skills required.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
