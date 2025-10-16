import HeroImage from "@/assets/AboutUS/HeroImage.png";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/AboutUS/man.png";
import img2 from "@/assets/AboutUS/lab.png";

const HeroSection = () => {
  return (
    <>
      <section className="relative pt-10 md:pt-20 overflow-hidden">
        {/* Background Image */}
        <div>
          <img
            className="w-full h-[60vh] md:h-auto object-cover"
            src={HeroImage}
            alt="about"
          />
        </div>

        {/* Content Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-4xl w-full">
          {/* Main Heading */}
          <h1 className="font-bold text-3xl sm:text-4xl md:text-6xl text-purple mb-3">
            We Power The Curious
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg font-normal text-white mb-6 px-2">
            At Survey Infinity, we believe that curiosity and understanding
            drive progress. We're on a mission to help organizations turn
            feedback into transformative action.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5">
            <div>
              <Button className="bg-purple text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-80 hover:bg-purple transition-opacity duration-300 w-full sm:w-auto">
                Get Started
              </Button>
            </div>
            <div>
              <Button className=" text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-80 transition-opacity duration-300 w-full sm:w-auto">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Sections */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Our Vision Section */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 mb-16 lg:mb-20 relative">
          <div className="flex-shrink-0 relative">
            <img
              src={img1}
              alt="Our Vision"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
            />
            {/* Color overlay */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: "rgba(191, 78, 232, 0.27)" }}
            ></div>
          </div>

          <div className="flex-1 max-w-2xl flex flex-col items-start text-center lg:text-left relative">
            <div className="absolute w-full h-96 rounded-full blur-3xl bg-[#BF4EE845]/20 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/5"></div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple mb-4">
              Our Vision
            </h1>
            <p className="text-lg sm:text-xl font-normal text-midnight leading-7 sm:leading-8">
              At Survey Infinity, we envision a world where asking the right
              questions leads to limitless growth, innovation, and connection.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-14">
          <div className="flex-shrink-0 relative">
            <img
              src={img2}
              alt="Our Mission"
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
            />
            {/* Color overlay */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: "#BF4EE845" }}
            ></div>
          </div>

          <div className="flex-1 max-w-2xl flex flex-col items-start text-center lg:text-left relative">
            <div className="absolute w-full h-96 rounded-full blur-3xl bg-[#BF4EE845]/20 top-1/2 left-0 transform -translate-y-1/2 translate-x-1/5" />
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple mb-4">
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl font-normal text-midnight leading-7 sm:leading-8">
              To make it easy for everyone — from small businesses to global
              enterprises — to create surveys, collect feedback, and act on real
              data with confidence and clarity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;