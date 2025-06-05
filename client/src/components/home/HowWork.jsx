import React from "react";

const HowWork = () => {
  const information = [
    {
      title: "Share The survey",
      description:
        "Drag-and-drop editor with customizable templates to create professional surveys in minutes.",
    },
    {
      title: "Analyze Results",
      description:
        "Share your survey via email, social media, or a unique link.",
    },
    {
      title: "Insights Analysis",
      description:
        "Get real-time insights and analytics to make data-driven decisions.",
    },
  ];
  return (
    <section className="px-5 py-20">
      <h1 className="text-3xl md:text-6xl lg:text-5xl text-midnight dark:text-white font-bold text-center">
        <span className="text-purple ">How</span> it Works
      </h1>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300 max-w-md mt-5 text-center mx-auto">
        Create your first survey in minutes, not hours.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-10">
        {information.map((info, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center bg-[#BF4EE81F] px-5 py-10 rounded-lg"
          >
            <div
              className="rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-lg shadow-lg"
              style={{
                background:
                  "linear-gradient(349.59deg, #490F8F 2.58%, #7616EC 52.73%)",
              }}
            >
              {index + 1}
            </div>
            <h1 className="text-purple font-bold mt-3 mb-2 text-lg dark:text-white">
              {info.title}
            </h1>
            <p className="text-sm text-midnight text-center w-auto font-semibold dark:text-gray-400">
              {info.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWork;
