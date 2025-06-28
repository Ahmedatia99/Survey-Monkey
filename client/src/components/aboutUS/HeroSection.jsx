import HeroImage from "@/assets/AboutUS/HeroImage.png";
import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return (
    <section className=" pt-10 md:pt-20">
      <div>
        <img className="w-full" src={HeroImage} alt="about" />
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="font-extrabold text-4xl md:text-6xl text-purple mb-3">
          We power the curious
        </h1>
        <p className="text-lg font-normal text-white">
          At Survey Infinity, we believe that curiosity and understanding drive
          progress. We're on a mission to help organizations turn feedback into
          transformative action.
        </p>
        <div className="flex justify-center mt-6 gap-5">
          <Button className="bg-purple text-white text-lg px-8 py-4 rounded-lg hover:opacity-80 hover:bg-purple transition-opacity duration-300">
            Get Started
          </Button>
          <Button className="bg-white text-midnight text-lg px-8 py-4 rounded-lg hover:opacity-80 hover:bg-white transition-opacity duration-300">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
