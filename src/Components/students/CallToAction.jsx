import React from "react";

const CallToAction = () => {
  return (
    <div className="mt-40 pb-20 flex flex-col items-center justify-center gap-5">
      <h1 className="text-center text-5xl font-extrabold text-gray-800">Learn anything, anytime, anywhere</h1>
      <p className="text-center">
        Unlock your potential with thousands of courses, expert instructors, and
        flexible learning schedules—all from the comfort of your home.
      </p>
      <div className="flex items-center gap-12 mt-8">
        <button className="cursor-pointer bg-[#783fe9] hover:bg-[#8751f3] text-white py-3 px-10 rounded-md">Get Strated</button>
        <button className="cursor-pointer flex gap-2 items-center group hover:scale-105 transform transition-transform duration-300">Learn More <i class="fa-solid fa-arrow-right transform transition-transform duration-300 group-hover:rotate-180"></i></button>
      </div>
    </div>
  );
};

export default CallToAction;
