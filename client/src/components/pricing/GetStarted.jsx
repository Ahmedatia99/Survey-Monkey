import { IoIosArrowRoundForward } from "react-icons/io";

const GetStarted = () => {
  return (
    <>
    <h1 className="font-medium text-2xl text-center my-12">Still have questions?<span className="text-[#490F8F]"> Contact our support team</span></h1>
    <section className="mb-10 md:mb-20 h-[300px] bg-gradient-to-r from-purple via-purple/90 to-midnight text-white flex flex-col gap-4 items-center justify-center text-center">
      <h1 className="text-xl font-bold">Ready to get started?</h1>
      <p className="text-base font-extralight">
        Join thousands of organizations that trust Survey Infinity to collect
        valuable feedback and make data-driven decisions.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button className="text-purple bg-white py-2 px-4 flex items-center gap-3 rounded-lg">
          Start Free Trial
          <IoIosArrowRoundForward className="text-xl font-bold" />
        </button>
        <button className="border border-white py-2 px-4 rounded-lg">
          Contact Sales
        </button>
      </div>
    </section>
    </>
  );
};

export default GetStarted;
