import React, { useContext } from "react";
import CourseOverview from "./CourseOverview";
import CourseCard from "./CourseCard";
import { Appcontext } from "../../context/Appcontext";

const CourseSection = () => {
  const { allCoursesDetails, navigate } = useContext(Appcontext);

  return (
    <div>
      <CourseOverview />
      <div className=" max-sm:mt-3 max-sm:px-0 max-sm:pt-5 py-10 px-5 flex flex-col items-center justify-center mt-10">
        <h1 className="max-sm:text-[30px] text-4xl font-bold text-[#322153] ">
          EXPLORE COURSES
        </h1>
        <p className="max-sm:hidden text-center py-6 px-10">
          Our courses, designed by industry experts, help you master in-demand
          skills through practical, hands-on projects and real-world examples —
          from beginner to advanced, explore a wide range of topics tailored to
          your learning goals and career growth.
        </p>
        <p className="sm:hidden  text-center py-3 px-5 text-[14px]">
          Industry experts design our courses to teach in-demand skills through
          practical projects, from beginner to advanced.
        </p>
      </div>

      <div className="flex justify-evenly flex-wrap gap-7">
        {allCoursesDetails.slice(0, 4).map((course, index) => {
          return <CourseCard key={index} course={course} />;
        })}
      </div>
      <div className="pt-15 flex items-center justify-center">
        <button
          onClick={() => {
            // scrollTo(0,0)
            navigate("/course-list");
          }}
          className="cursor-pointer border-1 border-gray-300 rounded-md text-xl py-2 px-3 hover:bg-[#e9e9e948]"
        >
          All Courses
        </button>
      </div>
    </div>
  );
};

export default CourseSection;
