import React from "react";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import logo from "/image/survey-money-logo.png";
import model from "/image/landing-person.png";

const Hero = () => {
  return (
    <div className="flex flex-col  md:flex-col lg:flex-row justify-center items-center pt-24 md:pt-40 lg:pt-64 gap-8 lg:gap-10 px-4 md:px-8">
      <section className=" lg:w-1/2 flex flex-col items-start  justify-center">
        <h1 className="heading text-3xl lg:text-5xl md:text-4xl">
          Create powerful surveys
          <br />
          <span className="sup-heading">in</span>
          minutes
          <span className="sup-heading">, not hours</span>
        </h1>
        <p className="sup-info max-w-md">
          Survey Infinity helps you gather actionable insights through
          beautifully designed, interactive surveys with advanced analytics and
          seamless integration.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button
            variant="default"
            className="capitalize dark:text-white py-4 px-8 text-base sm:py-5 sm:px-20 sm:text-lg"
            style={{
              background:
                "linear-gradient(320.2deg, #490F8F -0.43%, #7616EC 58.46%)",
            }}
          >
            get started
          </Button>
          <Button variant="secondary">
            templates <MoveRight />
          </Button>
        </div>
      </section>
      {/* Hide image section on md and below */}
      <section className="relative lg:w-1/3 hidden lg:flex items-center justify-center ">
        <div
          className="w-[40vw] h-[40vw] max-w-[320px] max-h-[320px] bg-purple"
          style={{
            clipPath:
              "polygon(50% 0%, 100% 30%, 100% 75%, 80% 100%, 20% 100%, 0 75%, 0 30%)",
          }}
        ></div>
        <FloatingLogo className="absolute -top-28 left-1/2 -translate-x-1/2 w-16 md:w-24 aspect-auto" />
        <FloatingLogo className="absolute -bottom-14 left-0 w-16 md:w-24 aspect-auto" />
        <img
          src={model}
          alt="model"
          loading="lazy"
          className="absolute bottom-0 right-[30%] max-w-[220px] md:max-w-md aspect-auto"
        />
        <Bubble text="Create, share and analyze" position="-left-20 top-0" />
        <Bubble text="Save your time!!" position="-right-10 bottom-0" />
      </section>
    </div>
  );
};

export default Hero;
const Bubble = ({ text, position }) => {
  return (
    <div
      className={`absolute text-purple px-5 py-1 rounded-2xl text-sm font-semibold bg-[#BF4EE81F] dark:text-white dark:bg-purple ${position}`}
    >
      {text}
    </div>
  );
};

const FloatingLogo = ({ className }) => {
  return <img src={logo} alt="floating-logo" className={className} />;
};
