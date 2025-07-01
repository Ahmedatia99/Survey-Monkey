import {Button} from "@/components/ui/button";
const StayUpdate = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full  xl:mt-[200px] py-16">
      <h1 className="font-Sarabun font-semibold text-[30px] mb-[10px] xl:text-[64px] text-[#7616EC]">
        Stay Updated
      </h1>
      <p className="font-Sarabun font-normal text-[20px] xl:text-[28px] xl:w-[70%]">
        Subscribe to our newsletter to receive product updates, industry
        insights, and helpful tips for creating effective surveys.
      </p>
      <div className="flex flex-col items-center justify-center w-full mt-8">
        <form className="xl:flex gap-5 items-center justify-center mt-8 w-full ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="xl:p-4 p-2 border border-gray-300 mb-[20px] w-[90%] rounded-md xl:w-[70%] "
            required
          />
          <Button className="xl:w-[250px] bg-[#7616EC] w-[90%] text-white font-Sarabun text-[20px] xl:text-[28px] px-[10px]  py-3 rounded-md hover:bg-[#5a0bbf]">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default StayUpdate;
