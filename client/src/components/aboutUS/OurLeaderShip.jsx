import first from '../../assets/AboutUS/first.png'
import second from '../../assets/AboutUS/second.png'
import third from '../../assets/AboutUS/third.png'

const OurLeaderShip = () => {
  return (
    <section className="my-[200px] flex flex-col gap-10 px-8 ">
        <div className="text-center">
            <h1 className="text-[#7616EC] font-Sarabun font-semibold text-[64px]">Meet Our Leadership</h1>
            <p className="font-Sarabun font-normal text-[28px] ">The talented people behind Survey Infinity who are passionate about helping organizations harness the power of feedback.</p>
        </div>
        <div className='mt-4 flex justify-center items-center gap-4' >
            <CardShip img={first} title={'Michael Chen'} decription={'Michael oversees all technology initiatives and ensures our platform stays innovative'}/>
            <CardShip img={second} title={'Aisha Patel'} decription={'Aisha leads our product strategy, focusing on creating intuitive user experiences.'}/>
            <CardShip img={third} title={'Michael Chen'} decription={'Michael oversees all technology initiatives and ensures our platform stays innovative.'}/>

        </div>
    </section>
  )
}

export default OurLeaderShip

const CardShip = ({img , title , decription })=>{
    return(
        <div className='w-fit'>
            <div className='max-w-[495px] w-[495px] h-[500px] overflow-hidden flex items-center justify-center'>
                <img 
                  src={img} 
                  className='transition-transform duration-300 ease-in-out hover:scale-110 w-full h-full object-cover' 
                  alt="first" 
                />
            </div>
            <div className='my-3'>
                <h3 className='font-Sarabun font-bold text-[30px] text-[#7616EC]'>{title}</h3>
                <span className='font-Sarabun font-normal text-2xl opacity-70'>Chief Technology Officer</span>
                <p className='font-Sarabun font-normal text-2xl w-[480px] mt-3'>{decription}</p>
            </div>
        </div>
    )
}