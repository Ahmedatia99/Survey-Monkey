import { useState } from "react";
import FAQ from "@/components/comman/FAQ";
import { questions, mainQuestion } from "@/constants/index";

const FaqQuestions = () => {
  const [clicked, setClicked] = useState(1);

  const filteredQuestions = questions.filter(
    (faq) => Number(faq.categoryId) === clicked
  );

  return (
    <section className="py-10  flex items-center justify-center">
      <div>
        <div className="flex gap-5 max-lg:flex-col items-center lg:items-start">
          {/* Sidebar Categories */}
          <aside className="gradient text-white w-fit p-4 rounded-lg shadow-sm flex flex-col items-center justify-center gap-4 h-[310px]">
            {mainQuestion.map((el) => (
              <div
                key={el.id}
                onClick={() => setClicked(Number(el.id))}
                className={`cursor-pointer transition-all p-3 ${
                  clicked === Number(el.id)
                    ? "border-l-4 border-gray-300 bg-purple500 shadow-md"
                    : "hover:border-l-4 hover:border-gray-300 hover:bg-purple500"
                }`}
              >
                <h1 className="text-lg font-semibold max-sm:text-base">
                  {el.heading}
                </h1>
                <p className="text-sm max-sm:text-xs">{el.info}</p>
              </div>
            ))}
          </aside>
          <FAQ questions={filteredQuestions} />
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;
