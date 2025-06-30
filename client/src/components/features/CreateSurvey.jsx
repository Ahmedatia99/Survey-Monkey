import React from "react";

const CreateSurvey = () => {
  return (
    <section className="mb-10 md:mb-20 h-[300px] bg-gradient-to-r from-purple via-purple/90 to-midnight text-white flex flex-col gap-4 items-center justify-center text-center">
      <h1 className="text-xl font-bold">Ready to Create Your First Survey?</h1>
      <p className="text-base font-extralight">
        Join thousands of professionals who trust SurveyPro for their research
        needs.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="text-purple bg-white py-2 px-6 rounded-lg">Start Free Trial</button>
        <button className="border border-white py-2 px-6 rounded-lg">Contact Sales</button>
      </div>
    </section>
  );
};

export default CreateSurvey;
