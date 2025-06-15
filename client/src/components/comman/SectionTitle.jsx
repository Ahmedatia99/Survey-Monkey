import React from "react";

const SectionTitle = ({
  leftTitle,
  rightTitle,
  subTitle,
  description,
  classname,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="text-3xl max-w-3xl lg:text-4xl font-bold text-center">
        <span className={classname || " "}>{leftTitle}</span>
        <span className="text-midnight dark:text-white"> {subTitle}</span>
        <span className="text-purple">{rightTitle}</span>
      </h2>
      <p className="text-sm mb-6 text-gray-600 dark:text-gray-300 mt-5 text-center mx-auto description-info md:text-lg">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
