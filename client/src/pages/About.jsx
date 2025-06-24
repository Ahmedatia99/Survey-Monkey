import GetInTouch from '../components/aboutUS/GetInTouch';
import HeroSection from '../components/aboutUS/HeroSection';
import ImageCards from '../components/aboutUS/ImageCards';
import OurCoreValue from '../components/aboutUS/OurCoreValue';
import OurCustomer from '../components/aboutUS/OurCustomer';
import OurLeaderShip from '../components/aboutUS/OurLeaderShip';
import OurStory from '../components/aboutUS/OurStory';
import StayUpdate from '../components/aboutUS/StayUpdate';
const About = () => {
  return (
    <div className='w-full '>
      <HeroSection />
      <ImageCards/>
      <OurCoreValue/>
      <OurStory/>
      <OurLeaderShip/>
      <OurCustomer/>
      <GetInTouch/>
      <StayUpdate/>
    </div>
  )
}

export default About