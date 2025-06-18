import React from "react";
import { Button } from "@/components/ui/button";

const SuccessCard = () => {
  const cards = [
    {
      id: 1,
      title: "The Golden State Warriors innovate with insights",
      description:
        "Learn how a top NBA team makes strategic decisions to achieve even greater levels of success.",
      image: "/image/template-card-3.png",
    },
    {
      id: 2,
      title: "Customer Success Story",
      description:
        "Learn how a top NBA team makes strategic decisions to achieve even greater levels of success.",
      image: "/image/template-card-1.png",
    },
    {
      id: 3,
      title: "Customer Success Story",
      description:
        "Learn how a top NBA team makes strategic decisions to achieve even greater levels of success.",
      image: "/image/template-card-4.png",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-gray-50 dark:bg-purple500 p-4 rounded-lg shadow-md"
        >
          <img
            src={card.image}
            alt={card.title || "success story"}
            className="w-full aspect-video object-cover rounded"
          />
          <h3 className="text-purple font-semibold text-xl pt-5 break-words">
            {card.title}
          </h3>
          <p className="text-gray-600 dark:text-white text-sm pb-4 pt-2">
            {card.description}
          </p>
          <Button className="bg-transparent dark:bg-purple border border-purple text-sm font-medium text-gray-700 dark:text-white hover:bg-transparent hover:opacity-80 transition-all mt-auto">
            View Success story
          </Button>
        </div>
      ))}
    </div>
  );
};

export default SuccessCard;
