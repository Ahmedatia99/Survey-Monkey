import React from "react";
import { CircleCheckBig, MoveRight } from "lucide-react";
import team from "/image/solutions.png";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const stepStyle = "text-green-500";
  const steps = [
    {
      icon: <CircleCheckBig size={20} className={stepStyle} />,
      title: "Team collaboration with shared templates and assets",
    },
    {
      icon: <CircleCheckBig size={20} className={stepStyle} />,
      title: "Custom branding and white-labeling options",
    },
    {
      icon: <CircleCheckBig size={20} className={stepStyle} />,
      title: "Advanced integrations with CRM and marketing tools",
    },
    {
      icon: <CircleCheckBig size={20} className={stepStyle} />,
      title: "Dedicated account manager and priority support",
    },
    {
      icon: <CircleCheckBig size={20} className={stepStyle} />,
      title: "Custom development for specialized survey needs",
    },
  ];
  return (
    <section
      style={{
        background:
          "linear-gradient(325.44deg, #490F8F -2.72%, #7616EC 43.42%)",
      }}
      className="py-10 px-4 md:py-20 md:px-10 flex flex-col lg:flex-row items-center justify-center gap-8"
    >
      {/* Image first on small screens, second on md+ */}
      <img
        src={team}
        alt="team"
        loading="lazy"
        className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl mb-8 md:mb-0 order-1 lg:order-2"
      />
      <div className="w-full md:w-auto order-2 md:order-1">
        <div className="flex flex-col items-start justify-start text-center">
          <h1 className="sup-heading max-w-3xl text-3xl lg:text-5xl md:text-4xl text-start !text-black">
            <span className="heading mr-2 !text-white">Enterprise</span>
            solutions for teams of all
            <span className="heading ml-2 !text-white">sizes</span>
          </h1>
          <p className="sup-info text-sm md:text-lg !text-white text-start mt-2">
            Scale your research capabilities with advanced features designed for
            teams and organizations..
          </p>
        </div>
        <div className="flex flex-col mt-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center gap-5">
              {step.icon}
              <p className="text-white mb-3 text-xs md:text-sm  font-semibold">
                {step.title}
              </p>
            </div>
          ))}
          <Button className="bg-white text-purple hover:bg-translate flex items-center justify-center w-fit mt-5">
            Learn about Enterprise solutions <MoveRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
