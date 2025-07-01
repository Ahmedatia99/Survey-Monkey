
// const OurCustomer = () => {
//   return (
//     <section className="bg-[#E0E0E042] p-[50px]">
//         <section className="text-center">
//             <h1 className="font-Sarabun font-bold text-[64px] text-[#7616EC]">What Our Customers Say</h1>
//             <p className="font-Sarabun font-normal text-[28px]" >Discover how organizations are using Survey Infinity to transform feedback into meaningful insights and action.</p>
//         </section>
//         <section className="bg-[#F2F2F2]">

//         </section>
//     </section>
//   )
// }

// export default OurCustomer
import image from '../../assets/AboutUS/Rectangle 2.png'
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';



const testimonials = [
  {
    id: 1,
    quote: "Survey infinity has transformed how we collect customer feedback. The insights we've gained have directly led to product improvements that our customers love.",
    rating: 4.1,
    name: "Thomas Party",
    title: "Product Designer",
    image: image
  },
  {
    id: 2,
    quote: "The analytics and reporting features are incredible. We can now make data-driven decisions that have significantly improved our customer satisfaction scores.",
    rating: 4.8,
    name: "Sarah Johnson",
    title: "Marketing Director",
    image: image
  },
  {
    id: 3,
    quote: "Implementation was seamless and the support team is outstanding. Our feedback collection has increased by 300% since we started using this platform.",
    rating: 4.9,
    name: "Michael Chen",
    title: "Customer Success Manager",
    image: image
  }
];

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className=" bg-[#E0E0E042] p-[50px]">
      <section className="text-center mb-16">
           <h1 className="font-Sarabun font-bold text-[30px] text-[] xl:text-[64px] text-[#7616EC]">What Our Customers Say</h1>
           <p className="font-Sarabun font-normal text-[20px] pt-[10px] xl:text-[28px]" >Discover how organizations are using Survey Infinity to transform feedback into meaningful insights and action.</p>       
      </section>
      {/* Testimonial Content */}
      <div className="relative overflow-hidden xl:w-[80%] mx-auto bg-[#F2F2F2] py-4 px-3">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ width: `${testimonials.length * 100}%`, transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 px-4"
              style={{ width: `${100 / testimonials.length}%` }}
            >
              <div className="rounded-2xl w-full xl:p-8 border border-gray-100">
                <div className="flex flex-col xl:w-[80%]  lg:flex-row items-center lg:items-start gap-12 mx-auto">
                  {/* Profile Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-26 h-26 lg:w-64 lg:h-64 rounded-2xl object-cover border-4 border-white shadow-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center max-w-[70%] lg:text-left">
                    <blockquote className="text-lg font-medium w-full lg:text-xl text-gray-800 leading-relaxed mb-6 font-Sarabun">
                      {testimonial.quote}
                    </blockquote>

                    {/* Rating */}
                    <div className="mb-4 flex justify-center lg:justify-start">
                      {renderStars(testimonial.rating)}
                    </div>

                    {/* Author Info */}
                    <div className='flex flex-col items-center  lg:items-end'>
                      <h4 className="font-semibold text-gray-900 text-start text-lg">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-600 text-[16px] xl:text-start capitalize">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center mt-8 gap-4">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? 'bg-purple w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm"
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};


const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`text-lg ${
              index < fullStars
                ? 'text-yellow-400'
                : index === fullStars && hasHalfStar
                ? 'text-yellow-400'
                : 'text-gray-300'
            }`}
          >
            ★
          </span>
        ))}
        <span className="ml-2 text-sm font-medium text-gray-700">
          {rating}
        </span>
      </div>
    );
  };

export default TestimonialSlider;