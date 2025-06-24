import FeatureCard from "@/components/comman/FeatureCard";
import SectionTitle from "@/components/comman/SectionTitle";
import {
  CalendarCheck,
  Users,
  MessagesSquare,
  GraduationCap,
} from "lucide-react";

const CustomerNeeds = () => {
  const iconClassName = "text-purple font-bold ";
  const icons = [
    {
      icon: (
        <CalendarCheck strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Events",
      description:
        "Attendance registration, event feedback, post-event surveys.",
    },
    {
      icon: <Users strokeWidth={2.5} size={30} className={iconClassName} />,
      title: "Human Resources",
      description:
        "Employee satisfaction, performance evaluations, workplace climate surveys.",
    },
    {
      icon: (
        <MessagesSquare strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Customer Feedback",
      description:
        "Customer satisfaction, product evaluations, service improvement.",
    },
    {
      icon: (
        <GraduationCap strokeWidth={2.5} size={30} className={iconClassName} />
      ),
      title: "Education",
      description: "Exams, student surveys, curriculum assessments.",
    },
  ];

  return (
    <div className=" my-40">
      <SectionTitle
        classname="text-purple"
        rightTitle="All Your Needs"
        subTitle="Diverse Uses for "
      />

      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5 mt-10">
        {icons.map(({ icon, title, description }) => (
          <FeatureCard
            key={title}
            icon={icon}
            title={title}
            description={description}
            className="text-center !bg-[#FFFFFF]  rounded-xl shadow-[0_10px_20px_rgba(0,0,0,0.12)] md:shadow-[0_0_20px_rgba(0,0,0,0.12)]  md:shadow-black/15  shadow-black/15 !p-3"
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerNeeds;
