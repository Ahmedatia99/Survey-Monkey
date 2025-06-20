import React from "react";

const FaqHeading = () => {
    return (
        <section className="flex flex-col lg:flex-row justify-around items-center py-5 md:py-10 lg:py-20 gap-8">
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <h1 className="text-purple text-3xl md:text-4xl font-bold mb-4">
                    Frequently Asked Questions
                </h1>
                <p className="text-base text-gray-600 dark:text-white max-w-md">
                    Find answers to the most common questions about our services and
                    features.
                </p>
            </div>
            <img
                src="./image/FAQ.png"
                alt="FAQ"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
            />
        </section>
    );
};

export default FaqHeading;
