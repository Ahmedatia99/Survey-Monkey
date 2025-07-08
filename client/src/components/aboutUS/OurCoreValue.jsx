import { Heart, Lightbulb, Users } from "lucide-react"
// import { motion } from "framer-motion";

const OurCoreValue = () => {
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

  return (
    <section className='w-full flex flex-col gap-[80px] items-center justify-center  py-20'>
            
          
        <motion.h1  initial="hidden"
                    animate="visible"
                    variants={itemVariants}  className="font-Sarabun font-extrabold text-[30px] lg:text-[67px] text-[#7616EC]">Our Core Values</motion.h1>
        <div className="lg:flex  gap-[32px]">
            <CoreCard icon={<Lightbulb size={35} />} title={"Purpose-driven"} description={"We believe that understanding people is the key to creating positive change in organizations, communities, and around the world."}/>
            <CoreCard icon={<Heart size={35} />} title={"Inclusive"} description={"We're committed to building products and a company culture that are accessible and equitable for everyone, regardless of background."}/>
            <CoreCard icon={<Users size={35} />} title={"Collaborative"} description={"We believe the best outcomes happen when teams work together, sharing insights and expertise to solve complex problems."}/>

        </div>
    </section>
  )
}

export default OurCoreValue

const CoreCard = ({icon , title , description})=> {
  return(
          
    <motion.div  initial="hidden" className="bg-[#EAD1FE2B] lg:w-[480px] mb-[10px] hover:shadow-md transition-all rounded-[20px] p-8 flex flex-col gap-4 items-start justify-center">
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-white rounded-full ">
          {icon}
        </div>
        <h3 className="font-Sarabun font-bold text-[32px] text-[#6614CB]">
          {title}
        </h3>
        <p children="font-Sarabun font-[500] text-[28px] text-[#000000]">
          {description}
        </p>
    </motion.div>
  )
}