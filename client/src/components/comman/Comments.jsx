import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Comments({ comment }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container overflow-hidden px-2 md:px-8">
      <Slider {...settings} className="!gap-5">
        {comment.map((user) => (
          <div className="p-4 bg-[#BF4EE81F] rounded-xl" key={user.id}>
            <div className="flex items-center gap-4">
              <img
                src={user.img}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover"
                alt={user.name}
              />
              <div className="flex flex-col gap-1 items-start">
                <h4 className="font-bold text-purple text-base md:text-lg">
                  {user.name}
                </h4>
                <span className="text-xs md:text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {user.position}
                </span>
              </div>
            </div>
            <div>
              <div className="flex items-center mt-2">
                {[...Array(user.rate)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.09 1.63.59-3.43L5 10l3.41-.49L10 6l1.59 3.51L15 10l-2.5 2.2.59 3.80L10 15z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-gray-600 dark:text-gray-100 text-sm md:text-base">
                {user.comment}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Comments;
