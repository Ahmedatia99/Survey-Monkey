import React from "react";

const AnalysisComers = () => {
  const avatars = [
    "/image/user1.png",
    "/image/user2.png",
    "/image/user3.png",
    "/image/user4.png",
    "/image/user5.png",
    "/image/user6.png",
  ];
  const stats = [
    { value: "5M+", label: "Monthly responses" },
    { value: "99.5%", label: "Uptime reliability" },
    { value: "42%", label: "Higher completion rate" },
    { value: "1.5M+", label: "Monthly Users" },
  ];
  return (
    <section className="back-img py-10 sm:py-16 md:py-20">
      <div className="flex items-center justify-center text-center px-4">
        <h1 className="sup-heading max-w-3xl text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Join over
          <span className="heading mx-2 inline">10,000+ organizations</span>
          collecting better data
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mt-8 sm:mt-10 gap-2 sm:gap-0 -space-x-3 sm:-space-x-4">
        {avatars.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`User ${index + 1}`}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white dark:border-midnight object-cover"
          />
        ))}
      </div>
      <div className="gradient text-white py-4 sm:py-5 mt-8 sm:mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
              <p className="text-xs sm:text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnalysisComers;
