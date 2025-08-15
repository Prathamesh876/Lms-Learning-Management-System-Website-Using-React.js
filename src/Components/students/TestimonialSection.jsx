import React from "react";
import { dummyTestimonial } from "../../assets/assets.js";

const TestimonialSection = () => {
  return (
    <div className="flex flex-col items-center gap-4 ">
      <h1 className="text-center text-3xl">What Our Learners Say</h1>
      <p className="text-center max-sm:text-[14px] text-gray-600">
        Here from our learners as they share their journeys of
        transformation,success,and how our platform has made a different in
        their lives.
      </p>
      <div className="mt-28 flex gap-28 flex-wrap justify-center">
        {dummyTestimonial.map((testimonial, i) => {
          return (
            <div key={i} className="max-sm:w-70 w-100 flex flex-col gap-2 py-5 px-3 relative rounded-2xl border-1 border-[#8e0bc63d] shadow-xl ">
              <div className="absolute -top-18 max-sm:-top-17 left-39 max-sm:left-25 overflow-hidden ">
                <img className="w-22 h-22 rounded-full object-cover" src={testimonial.image} alt="ProfileImage" />
              </div>
              <h1 className="text-[#8e0bc6] text-[18px] font-bold">{testimonial.name}</h1>
              <h2 className="text-[15px]">{testimonial.role}</h2>
              <div className="flex gap-3">
                <p>{testimonial.rating}</p>
                <p>* * * * *</p>
              </div>
              <p className="text-[15px] text-gray-700">{testimonial.feedback}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestimonialSection;
