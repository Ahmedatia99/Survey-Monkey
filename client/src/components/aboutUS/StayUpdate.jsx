import {Button} from "@/components/ui/button";
const StayUpdate = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center w-full mt-[200px] py-16">
      <h1 className="font-Sarabun font-semibold text-[64px] text-[#7616EC]">
        Stay Updated
      </h1>
      <p className="font-Sarabun font-normal text-[28px] w-[70%]">
        Subscribe to our newsletter to receive product updates, industry
        insights, and helpful tips for creating effective surveys.
      </p>
      <div className="flex flex-col items-center justify-center w-full mt-8">
        <form className="flex gap-5 items-center justify-center mt-8 w-full ">
          <input
            type="email"
            placeholder="Enter your email address"
            className="p-4 border border-gray-300 rounded-md w-[70%] "
            required
          />
          <Button className="w-[250px] bg-[#7616EC] text-white font-Sarabun text-[28px] px-[10px]  py-3 rounded-md hover:bg-[#5a0bbf]">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default StayUpdate;
