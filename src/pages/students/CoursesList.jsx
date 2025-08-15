import React, { useContext,useState } from "react";
import { Appcontext } from "../../context/Appcontext";
import CourseCard from '../../Components/students/CourseCard'

const CoursesList = () => {
  const { navigate,allCoursesDetails } = useContext(Appcontext);
  const[inputData,setInputDataset] =useState('');

  

  return (
    <>
      <div>
        <div className="pt-10 pb-5 px-20 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-3">All Course List</h1>
            <span
              onClick={() => {
                navigate("/");
              }}
              className="text-blue-700 hover:underline cursor-pointer"
            >
             / Go Home
            </span>
          </div>

          <div className="flex gap-2">
            <input onChange={(data)=>{
             setInputDataset (data.target.value);
                 
            }} className="w-130 border-1 h-10 px-3 outline-none border-gray-500 rounded-sm text-xl" type="text" placeholder="Search Courses" />
            <button className="bg-[#936cff] text-white text-xl px-6 rounded-sm hover:bg-[#8960f9] cursor-pointer">Search</button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 mt-15 mb-15">
            {allCoursesDetails.filter((course)=>{
                  return inputData.toLowerCase() === '' ? true : course.courseTitle.toLowerCase().includes(inputData.toLowerCase());
            }).map((course,id)=>{
              return (
               <CourseCard key={id} course={course} />
            )
            })}
        </div>
      </div>
    </>
  );
};

export default CoursesList;
