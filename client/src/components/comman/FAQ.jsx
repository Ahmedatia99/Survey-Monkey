import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const FAQ = ({ questions }) => {
  const [visibleIndex, setVisibleIndex] = useState(null); // For visibility toggling based on number type

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col flex-1 bg-transparent rounded-lg shadow-sm overflow-y-auto w-fit md:w-[550px]">
      {questions?.length > 0 ? (
        questions.map((el) => (
          <div
            key={el.id}
            className="p-5 border-b-2 border-gray-300 gradient text-white last:border-b-0"
          >
            <div className="flex items-center justify-between ">
              <h2 className=" text-base max-sm:text-sm">{el.ques}</h2>
              <button
                onClick={() => toggleVisibility(el.id)}
                aria-expanded={visibleIndex === el.id}
                aria-label={
                  visibleIndex === el.id ? "Collapse answer" : "Expand answer"
                }
                className="transition-all p-2 rounded-md"
              >
                {visibleIndex === el.id ? (
                  <Minus
                    size={20}
                    className="md:ml-8 sm:ml-3 cursor-pointer "
                  />
                ) : (
                  <Plus
                    size={20}
                    className="md:ml-8 sm:ml-3 rounded-md cursor-pointer"
                  />
                )}
              </button>
            </div>
            <AnimatePresence>
              {visibleIndex === el.id ? (
                <motion.div
                  layout
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 1, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden mt-4"
                >
                  <hr className="border-gray-400" />
                  <p className="w-full p-4 text-sm md:text-base">{el.ans}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center">Select type of Questions.</p>
      )}
    </div>
  );
};
export default FAQ;
