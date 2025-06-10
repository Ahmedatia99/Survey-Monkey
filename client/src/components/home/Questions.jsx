import React from "react";
import FAQ from "@/components/comman/FAQ";
import {
  CircleHelp,
  LockKeyhole,
  ChartNoAxesColumn,
  Users,
} from "lucide-react";
const Questions = () => {
  const iconStyle = "text-purple";
  const questions = [
    {
      id: 1,
      question: "How do I create my first survey?",
      answer:
        "Simply sign up, choose from our templates or start from scratch. Our intuitive builder lets you drag and drop questions, customize designs,and share your survey in minutes.",
      icon: <CircleHelp strokeWidth={2.5} size={18} className={iconStyle} />,
    },
    {
      id: 2,
      question: "Is my survey data secure?",
      answer:
        "Yes! We use enterprise-grade security measures to protect your data.All responses are encrypted and stored securely on our servers.All responses are encrypted and stored securely on our servers.",
      icon: <LockKeyhole strokeWidth={2.5} size={18} className={iconStyle} />,
    },
    {
      id: 3,
      question: "How can I analyze my results?",
      answer:
        "Yes, you can edit or delete tasks by clicking on the respective buttons next to each task.",
      icon: (
        <ChartNoAxesColumn strokeWidth={2.5} size={18} className={iconStyle} />
      ),
    },
    {
      id: 4,
      question: "How many responses can I collect?",
      answer:
        "You can collect an unlimited number of responses with our platform.",
      icon: <Users strokeWidth={2.5} size={18} className={iconStyle} />,
    },
  ];
  return (
    <section>
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center  text-midnight dark:text-white mb-5">
          <span className="text-purple">Frequently</span> Asked Questions
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">
          Every thing you need to know about creating surveys
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4">
        <FAQ questions={questions} />
      </div>
    </section>
  );
};

export default Questions;
