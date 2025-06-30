import HeroImage from "@/assets/AboutUS/HeroImage.png";
import { Button } from "@/components/ui/button";
import img1 from "@/assets/AboutUS/man.png";
import img2 from "@/assets/AboutUS/lab.png";

const HeroSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 1.1, 
      opacity: 0 
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { 
      y: 30, 
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // New animation variants for vision/mission sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageHover = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <>
      <section className="relative pt-10 md:pt-20 overflow-hidden">
        {/* Background Image with Animation */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <img className="w-full h-[60vh] md:h-auto object-cover" src={HeroImage} alt="about" />
        </motion.div>

        {/* Content Overlay */}
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center px-4 max-w-4xl w-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Main Heading */}
          <motion.h1 
            className="font-bold text-3xl sm:text-4xl md:text-6xl text-purple mb-3"
            variants={itemVariants}
          >
            We Power The Curious
          </motion.h1>

          {/* Description */}
          <motion.p 
            className="text-base sm:text-lg font-normal text-white mb-6 px-2"
            variants={itemVariants}
          >
            At Survey Infinity, we believe that curiosity and understanding drive
            progress. We're on a mission to help organizations turn feedback into
            transformative action.
          </motion.p>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-5"
            variants={itemVariants}
          >
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className="bg-purple text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-80 hover:bg-purple transition-opacity duration-300 w-full sm:w-auto">
                Get Started
              </Button>
            </motion.div>
          
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Button className=" text-white text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:opacity-80 transition-opacity duration-300 w-full sm:w-auto">
                Watch Demo
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Vision and Mission Sections */}
      <section className="w-full max-w-7xl mx-auto mt-10 px-4 sm:px-6 lg:px-8">
        {/* Our Vision Section */}
        <motion.div 
          className="w-full flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 mb-16 lg:mb-20 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div 
            className="flex-shrink-0 relative"
            variants={slideInLeft}
            whileHover="hover"
            {...imageHover}
          >
            <img 
              src={img1} 
              alt="Our Vision" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
            />
            {/* Color overlay */}
            <div 
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: '#BF4EE845' }}
            />
          </motion.div>
          
          <motion.div 
            className="flex-1 max-w-2xl flex flex-col items-start text-center lg:text-left relative"
            variants={slideInRight}
          >
            <div className="absolute w-full h-96 rounded-full blur-3xl bg-[#BF4EE845]/20 top-1/2 right-0 transform -translate-y-1/2 translate-x-1/5"/>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple mb-4"
              variants={itemVariants}
            >
              Our Vision
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl font-normal text-midnight leading-7 sm:leading-8"
              variants={itemVariants}
            >
              At Survey Infinity, we envision a world where asking the right questions leads to limitless growth, innovation, and connection.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Our Mission Section */}
        <motion.div 
          className="w-full flex flex-col lg:flex-row-reverse items-center justify-center gap-8 lg:gap-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={sectionVariants}
        >
          <motion.div 
            className="flex-shrink-0 relative"
            variants={slideInRight}
            whileHover="hover"
            {...imageHover}
          >
            <img 
              src={img2} 
              alt="Our Mission" 
              className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto object-cover rounded-lg"
            />
            {/* Color overlay */}
            <div 
              className="absolute inset-0 rounded-lg"
              style={{ backgroundColor: '#BF4EE845' }}
            ></div>
          </motion.div>
          
          <motion.div 
            className="flex-1 max-w-2xl flex flex-col items-start text-center lg:text-left relative"
            variants={slideInLeft}
          >
            <div className="absolute w-full h-96 rounded-full blur-3xl bg-[#BF4EE845]/20 top-1/2 left-0 transform -translate-y-1/2 translate-x-1/5"/>
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-purple mb-4"
              variants={itemVariants}
            >
              Our Mission
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl font-normal text-midnight leading-7 sm:leading-8"
              variants={itemVariants}
            >
              To make it easy for everyone — from small businesses to global enterprises — to create surveys, collect feedback, and act on real data with confidence and clarity.
            </motion.p>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;