import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { Button } from "@/components/ui/button";
const GetInTouch = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full h-full my-16 p-4" >
        <section className="text-center ">
            <h1 className="font-Sarabun font-bold text-[30px] mb-[10px] xl:text-[64px] text-[#7616EC]">Get in Touch</h1>
            <p className="font-Sarabun font-normal text-[20px] xl:text-[28px]">Have questions about SurveyPro? Our team is here to help you find the right solution for your needs.</p>
        </section>

        <section className="xl:flex  gap-6 items-center justify-center w-full mt-16">
            <div className="flex flex-col mb-[20px] items-start justify-center p-5 xl:p-10 bg-[#7616EC] xl:w-[40%] text-white rounded-[30px] ">
                <div className="w-full">
                    <h2 className="font-Sarabun text-[30px] text-center mb-[10px] xl:text-[54px] font-semibold">Contact Information</h2>
                    <p className="font-Sarabun text-[24px] font-normal">Fill out the form or contact us directly using the information below.</p>
                </div>
                <div className="flex flex-col gap-4 my-16 w-full">
                    <div className="flex items-start flex-shrink-0 gap-4">
                        <MapPin size={30} />
                        <div>
                            <h3 className="text-[26px] font-Sarabun mb-[10px] font-medium">Our Headquarters</h3>
                            <p className="text-[20px] font-Sarabun font-medium">123 Survey Street, San Francisco, CA 94103, United States</p>
                        </div>
                    </div>
                    <div className="flex items-start flex-shrink-0 gap-4">
                        <Phone size={30} />
                        <div>
                            <h3 className="text-[26px] font-Sarabun mb-[10px] font-medium">Phone</h3>
                            <p className="text-[20px] font-Sarabun font-medium">+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div className="flex items-start flex-shrink-0 gap-4">
                        <Mail size={30} />
                        <div>
                            <h3 className="text-[26px] font-Sarabun mb-[10px] font-medium">Email</h3>
                            <p className="text-[20px] font-Sarabun font-medium">info@surveypro.example</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col text-start items-start justify-center gap-4 mt-8">
                    <h3 className="font-Sarabun font-semibold text-[28px]">Follow Us</h3>
                    <div className="flex items-center justify-start gap-4">
                    <Instagram />
                    <Twitter />
                    <Facebook />
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center xl:items-start justify-center p-5 xl:p-10 bg-[#FCF8FF] xl:w-[40%] rounded-[30px]">
                <form className="flex flex-col gap-8  p-10 rounded-[30px] w-full ">
                    <h2 className="font-Sarabun text-[30px] xl:text-[54px] font-semibold">Send us a message</h2>
                    <div className="flex gap-4 w-full">
                        <input id="name" type="text" placeholder="Your Name" className="p-4 border w-[50%] border-gray-300 rounded-md" />
                        <input id="emal" type="email" placeholder="Your Email" className="p-4 border w-[50%]  border-gray-300 rounded-md" />
                    </div>
                    <input id="subject" type="text" placeholder="subject" className="p-4  border border-gray-300 rounded-md" />
                    <textarea placeholder="Your Message" className="p-4 border mt-8 border-gray-300 rounded-md h-[216px]" />
                    <Button className=' w-[250px] bg-[#7616EC] text-white font-Sarabun text-[20px] xl:text-[28px] px-[10px] hover:bg-[#5a0bbf]'>
                        Send Message
                    </Button>
                </form>
    <section className="flex flex-col items-center justify-center w-full h-full my-16 p-4">
      <section className="text-center">
        <h1 className="  font-bold text-[64px] text-[#7616EC]">Get in Touch</h1>
        <p className="  font-normal text-[28px]">
          Have questions about SurveyPro? Our team is here to help you find the
          right solution for your needs.
        </p>
      </section>
      <section className="flex gap-6 items-center justify-center w-full mt-16">
        <div className="flex flex-col items-start justify-center  p-10 bg-[#7616EC] w-[40%] text-white rounded-[30px] ">
          <div className="w-full">
            <h2 className="  text-[54px] font-semibold">Contact Information</h2>
            <p className="  text-[24px] font-normal">
              Fill out the form or contact us directly using the information
              below.
            </p>
          </div>
          <div className="flex flex-col gap-4 my-16 w-full">
            <div className="flex items-start flex-shrink-0 gap-4">
              <MapPin size={30} />
              <div>
                <h3 className="text-[26px]   font-medium">Our Headquarters</h3>
                <p className="text-[26px]   font-medium">
                  123 Survey Street, San Francisco, CA 94103, United States
                </p>
              </div>
            </div>
            <div className="flex items-start flex-shrink-0 gap-4">
              <Phone size={30} />
              <div>
                <h3 className="text-[26px]   font-medium">Phone</h3>
                <p className="text-[26px]   font-medium">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start flex-shrink-0 gap-4">
              <Mail size={30} />
              <div>
                <h3 className="text-[26px]   font-medium">Email</h3>
                <p className="text-[26px]   font-medium">
                  info@surveypro.example
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col text-start items-start justify-center gap-4 mt-8">
            <h3 className="  font-semibold text-[28px]">Follow Us</h3>
            <div className="flex items-center justify-start gap-4">
              <Instagram />
              <Twitter />
              <Facebook />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center  p-10 bg-[#FCF8FF] w-[40%] rounded-[30px]">
          <form className="flex flex-col gap-8 p-10 rounded-[30px] w-full ">
            <h2 className="  text-[54px] font-semibold">Send us a message</h2>
            <div className="flex gap-4 w-full">
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-4 border w-[50%] border-gray-300 rounded-md"
              />
              <input
                id="emal"
                type="email"
                placeholder="Your Email"
                className="p-4 border w-[50%]  border-gray-300 rounded-md"
              />
            </div>
            <input
              id="subject"
              type="text"
              placeholder="subject"
              className="p-4  border border-gray-300 rounded-md"
            />
            <textarea
              placeholder="Your Message"
              className="p-4 border mt-8 border-gray-300 rounded-md h-[216px]"
            />
            <Button className=" w-[250px] bg-[#7616EC] text-white    text-[28px] px-[10px] hover:bg-[#5a0bbf]">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </section>
  );
};

export default GetInTouch;
