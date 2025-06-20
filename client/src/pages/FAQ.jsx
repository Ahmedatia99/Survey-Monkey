import React from "react";
import FaqQuestions from "@/components/faq/FaqQuestions";
import FaqHeading from "./../components/faq/FaqHeading";

const FAQ = () => {
  return (
    <section className="container mx-auto px-5 py-10">
      <FaqHeading />
      <FaqQuestions />
    </section>
  );
};

export default FAQ;
