import { Globe } from "lucide-react"

const OurStory = () => {
  return (
    <section className="bg-gradient-to-t from-[#490F8F] to-[#7616EC] h-[632px] w-[97%] mx-auto rounded-[10px] flex flex-col justify-center items-center p-4" >
        <div>
            <Globe color="white" size={100}/>
        </div>
        <h2 className="font-Sarabun font-bold text-[67px] text-white">Our Story</h2>
        <p className="font-Sarabun font-[400] text-[28px] text-white w-[1600px] text-center p-4">
            Founded in 2010, Survey Infinity began with a simple idea: to make it easy for anyone to collect and learn from feedback. Today, we've grown into a global leader in survey software, helping millions of customers across 190+ countries turn curiosity into action.
            Our platform is designed to give everyone—from individuals to large enterprises—the tools they need to ask questions, analyze responses, and make better decisions.
        </p>
    </section>
  )
}

export default OurStory