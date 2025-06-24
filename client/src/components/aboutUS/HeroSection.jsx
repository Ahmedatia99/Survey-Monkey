import HeroImage from '../../assets/AboutUS/HeroImage.png';
import { Button } from '@material-tailwind/react';
const HeroSection = () => {
  return (
    <section className="w-full ">
        <div>
            <img className='w-full' src={HeroImage} alt="Hero" />
        </div>
        <div className='absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h1 className='font-Sarabun font-extrabold text-[60px] text-[#7616EC]'>We power the curious</h1>
            <p className='font-Sarabun font-[500] text-[24px] text-white'>
            At Survey Infinity, we believe that curiosity and understanding drive progress.
             We're on a mission to help organizations turn feedback into transformative action.
            </p>
            <div className='flex justify-center mt-6'>
            <Button className=' w-[250px] bg-[#7616EC] text-white font-Sarabun  text-[28px] px-[10px] hover:bg-[#5a0bbf]'>
                Get Started
            </Button>
            <Button className=' w-[250px] hover:bg-white text-white hover:text-[#7616EC] font-Sarabun text-[28px] px-[10px] ml-4 bg-transparent'>
                Watch Demo
            </Button>
        </div>
        </div>
        
    </section>
  )
}

export default HeroSection