import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [inputData, setInputData] = useState("");
  const navigate = useNavigate();

  const handellChanges=(e)=>{
          e.preventDefault();
          navigate("/course-list/"+inputData);
  }

  return (
    <div className="bg-[#783fe9] mx-10 rounded-2xl text-center flex flex-col items-center justify-center gap-5 max-sm:px-3 max-sm:py-10 sm:px-6 sm:py-10 md:px-12 md:py-10 lg:px-10 lg:py-15 ">
      <p className="text-white font-semibold max-sm:text-2xl sm:text-3xl md:leading-10 md:text-4xl lg:leading-16 lg:text-5xl">
        Learning is a <span className="italic text-[#c1c0c0] hhover:-translate-y-1 hover:-translate-y-2 cursor-pointer hover:text-white transition-all duration-300 inline-block">Journey</span>,
        not a race. Take your time and Enjoy every 
        <span className="italic text-[#aaaaaa] hhover:-translate-y-1 hover:-translate-y-2 cursor-pointer hover:text-white transition-all duration-300 inline-block">step.</span>
      </p>
      <p className="text-gray-200 text-xl max-sm:text-[14px]  sm:text-[17px]  md:px-10 md:text-[18px] lg:px-30 lg:text-2xl">
        Introducing Career Accelerators – focus on the skills and real-world
        experience that'll get you noticed.
      </p>
      <form onSubmit={handellChanges} className="mt-10 max-sm:mt-2">
        <input
          onChange={(e) => setInputData(e.target.value)}
          type="text"
          placeholder="Search Courses....."
          className="bg-amber-50 h-10 px-4 outline-none rounded-full max-sm:h-8 max-sm:w-[60vw] sm:w-[70vw] md:w-[50vw]"
        />
      </form>
    </div>
  );
};

export default Hero;
