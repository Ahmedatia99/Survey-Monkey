import image1 from '../../assets/AboutUS/man.png'
import image2 from '../../assets/AboutUS/lab.png'
const ImageCards = () => {
  return (
    <section className='w-full flex flex-col items-center justify-center'>
        <Roll image={image1} title="Our Vision" flag={false} description="At Survey Infinity, we envision a world where asking the right questions leads to limitless growth, innovation, and connection." />
        <Roll image={image2} title="Our Mission"  flag={true} description="To make it easy for everyone — from small businesses to global enterprises — to create surveys, collect feedback, and act on real data with confidence and clarity." />
       
    </section>
  )
}

export default ImageCards

const Roll = ({ image, title, description , flag }) => {
    return (
        <div className={`flex items-center  gap-24 p-20 ${flag ? 'flex-row-reverse' : ''}`}>
            <div className='w-[700px] '>
                 <img  src={image} alt={title} />
            </div>
            <div className='w-[619px] before:shadow-[#7616EC] self-start'>
                <h2 className='text-[60px] font-extrabold font-Sarabun text-[#7616EC]'>{title}</h2>
                <p className='font-Sarabun font-medium leading-[200%] text-2xl'>{description}</p>
            </div>
            
        </div>
    )
}