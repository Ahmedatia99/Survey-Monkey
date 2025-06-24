import logo from "/image/survey-money-logo.png";
import SectionTitle from "@/components/comman/SectionTitle";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <>
      <div className="place-items-center">
        <div className="flex items-center justify-center mb-16">
          <img
            src={logo}
            alt=""
            className="w-12 h-12 sm:w-24 sm:h-20"
            style={{ transform: "rotate(30deg)" }}
          />
          <h1 className="mx-2 text-5xl sm:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple to-midnight">
            FEATURES
          </h1>
          <img
            src={logo}
            alt=""
            className="w-12 h-12 sm:w-24 sm:h-20"
            style={{ transform: "rotate(30deg)" }}
          />
        </div>
        <SectionTitle
          classname="text-purple"
          leftTitle="Create"
          rightTitle="surveys"
          subTitle="Easy Professional "
          description={`An integrated platform for creating and managing surveys with advanced tools and detailed analytics.
            Designed specifically for Arabic users.`}
        />
        <Button
          className="capitalize dark:text-white py-4 px-8 text-base sm:py-5 sm:px-20 sm:text-lg"
          style={{
            background:
              "linear-gradient(320.2deg, #490F8F -0.43%, #7616EC 58.46%)",
          }}
        >
          Start for free
        </Button>
      </div>
    </>
  );
};

export default HeroSection;
