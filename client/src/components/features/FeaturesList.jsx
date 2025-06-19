import FeatureCard from "@/components/comman/FeatureCard";
import {
  Share2,
  GripHorizontal,
  ListTodo,
  Smartphone,
  BookA,
  ChartPie,
  ArrowRight,
} from "lucide-react";

export const FeaturesList = () => {
  const iconClassName = "text-purple font-bold";
  const icons = [
    {
      icon: <Share2 strokeWidth={2.5} size={20} className={iconClassName} />,
      title: "Intuitive Survey Creation",
      description:
        "Easily design surveys with a user-friendly interface and customizable templates.",
    },
    {
      icon: (
        <GripHorizontal strokeWidth={2.5} size={20} className={iconClassName} />
      ),
      title: "Advanced Survey Management",
      description:
        "Organize and manage your surveys efficiently with powerful tools and features.",
    },
    {
      icon: <ListTodo strokeWidth={2.5} size={20} className={iconClassName} />,
      title: "Real-time Data Tracking",
      description:
        "Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills.",
    },
    {
      icon: (
        <Smartphone strokeWidth={2.5} size={20} className={iconClassName} />
      ),
      title: "Comprehensive Analytics",
      description:
        "Gain insights with detailed analytics and reporting tools to make data-driven decisions.",
    },
    {
      icon: <BookA strokeWidth={2.5} size={20} className={iconClassName} />,
      title: "Lightning-fast Insights",
      description:
        "Get instant feedback and insights with our real-time data processing capabilities.",
    },
    {
      icon: <ChartPie strokeWidth={2.5} size={20} className={iconClassName} />,
      title: "Secure Data Collection",
      description:
        "Drag-and-drop editor with customizable templates to create professional surveys in minutes without any technical skills.",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
      {icons.map(({ icon, title, description }) => (
        <FeatureCard
          key={title}
          icon={<div className="bg-[#BF4EE81F] p-2 rounded-[8px]">{icon}</div>}
          title={title}
          description={description}
          className="!items-start !text-left bg-[#F9F9F9] md:overflow-hidden !p-3"
        >
          <div className="mt-auto ml-auto">
            <button className=" flex gap-1 items-center  text-purple ">
              see more <ArrowRight size={20}/>
            </button>
          </div>
        </FeatureCard>
      ))}
    </div>
  );
};
