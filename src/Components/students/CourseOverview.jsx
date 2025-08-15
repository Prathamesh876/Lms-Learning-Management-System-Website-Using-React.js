import React from "react";
import { assets } from "../../assets/assets";
const CourseOverview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center mt-13 py-10 max-sm:mt-2 sm::mt-4">
      <p className="text-5xl font-bold font-serif text-[#693ac7] max-sm:text-[9vw] ">
        ....What We Teach....
      </p>
      <div className="overview mt-14 flex items-center justify-center flex-wrap gap-10 ">
        {/* card1  */}
        <div className="cursor-pointer p-5 bg-white border-1 border-[#d4d0d0d4] rounded-2xl hover:scale-105 transition-transform duration-500 shadow-lg max-sm:p-3">
          <div className="flex items-center gap-5 max-sm:gap-2">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/022/691/970/small/3d-file-format-data-icon-illustration-png.png"
              alt="JavaLogo"
              className="h-10 w-10 object-cover max-sm:h-8 max-sm:w-8"
            />
            <p className="text-[20px] w-70 font-bold text-[#2a2a2a] max-sm:text-[16px] max-sm:w-60">
              Advanced Java Programming & Design Patterns
            </p>
          </div>
          <div className="pt-3 pb-2 pl-14 w-90 max-sm:w-70 max-sm:pl-10">
            <p className="max-sm:text-[14px]">
              Master Java multithreading,JVM internals. Essential design
              patterns to build scalable, maintainable apps.
            </p>
          </div>
          <div className="pl-14 max-sm:pl-10">
            <p className="font-bold">Languages: Java, SQL</p>
          </div>
        </div>
        {/* card2 */}
        <div className="cursor-pointer p-5 bg-white border-1 border-[#d4d0d0d4] rounded-2xl hover:scale-105 transition-transform duration-500 shadow-lg max-sm:p-3">
          <div className="flex items-center gap-5 max-sm:gap-2">
            <img
              src="https://static.vecteezy.com/system/resources/previews/011/652/855/non_2x/coding-book-3d-render-icon-illustration-png.png"
              alt="JavaLogo"
              className="h-10 w-10 object-cover max-sm:h-8 max-sm:w-8"
            />
            <p className="text-[20px] w-70 font-bold text-[#2a2a2a] max-sm:text-[16px] max-sm:w-60">
              Spring Boot Microservices & Security
            </p>
          </div>
          <div className="pt-3 pb-2 pl-14 w-90 max-sm:w-70 max-sm:pl-10">
            <p className="max-sm:text-[14px]">
              Master Spring Boot microservices architecture, build secure REST
              APIs, understand systems best practices.
            </p>
          </div>
          <div className="pl-14 max-sm:pl-10">
            <p className="font-bold">Languages: Java, Kotlin, SQL</p>
          </div>
        </div>

        {/* card3 */}
        <div className="cursor-pointer p-5 bg-white border-1 border-[#d4d0d0d4] rounded-2xl hover:scale-105 transition-transform duration-500 shadow-lg max-sm:p-3">
          <div className="flex items-center gap-5 max-sm:gap-2">
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/free-javascript-9294848-7577991.png"
              alt="JavaLogo"
              className="h-10 w-10 object-cover max-sm:h-8 max-sm:w-8"
            />
            <p className="text-[20px] w-70 font-bold text-[#2a2a2a] max-sm:text-[16px] max-sm:w-60">
              React Js Advanced & State Management
            </p>
          </div>
          <div className="pt-3 pb-2 pl-14 w-90 max-sm:w-70 max-sm:pl-10">
            <p className="max-sm:text-[14px]">
              Leverage React Js hooks, context API, Redux, integrate with REST
              ,GraphQL And Responsive Design. 
            </p>
          </div>
          <div className="pl-14 max-sm:pl-10">
            <p className="font-bold">Languages: JavaScript, ReactJs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
