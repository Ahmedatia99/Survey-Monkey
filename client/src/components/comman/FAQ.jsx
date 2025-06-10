import React from "react";

const FAQ = ({ questions }) => {
  return (
    <>
      {questions.map((question) => (
        <div
          key={question.id}
          className="mb-4 bg-[#BF4EE81F] p-4 rounded-lg shadow-md"
        >
          <h3 className="text-lg text-purple dark:text-white font-semibold flex items-center">
            <span className="mr-2">{question.icon}</span>
            {question.question}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">{question.answer}</p>
        </div>
      ))}
    </>
  );
};

export default FAQ;
