import { Check } from "lucide-react";

const ActionBanner = () => {
  return (
    <section className="my-40">
      <div className="flex flex-col gap-6 lg:flex-row justify-between items-center mb-40">
        <div>
          <h1 className="text-3xl text-purple font-bold">
            Create Engaging Surveys in Minutes
          </h1>
          <div className="flex gap-3 mt-9 ml-6 max-w-[400px]">
            <div className="bg-purple500
             p-1 rounded-lg h-fit">
              <Check
                strokeWidth={2}
                size={20}
                className="text-purple font-bold "
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple">
                40+ Question Types
              </h3>
              <p className="text-[#767676] text-lg font-normal">
                From multiple choice to matrix questions, we have everything you
                need.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-9 ml-6 max-w-[400px]">
            <div className="bg-purple500
             p-1 rounded-[8px] h-fit">
              <Check
                strokeWidth={2}
                size={20}
                className="text-purple font-bold "
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple">Logic Branching</h3>
              <p className="text-[#767676] text-lg font-normal">
                Create dynamic surveys that adapt based on respondent answers.
              </p>
            </div>
          </div>
          <div className="flex gap-3 mt-9 ml-6 max-w-[400px]">
            <div className="bg-purple500
             p-1 rounded-[8px] h-fit">
              <Check
                strokeWidth={2}
                size={20}
                className="text-purple font-bold "
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-purple">
                Mobile Responsive
              </h3>
              <p className="text-[#767676] text-lg font-normal">
                Surveys look great on any device, increasing completion rates.
              </p>
            </div>
          </div>
        </div>
        <div > 
          <img src="/public/image/Group.png" alt="" className="hidden md:block w-auto aspect-auto" />
        </div>
      </div>
    </section>
  );
};

export default ActionBanner;
