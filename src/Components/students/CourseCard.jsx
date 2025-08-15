import React from 'react'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom'

const CourseCard = ({course}) => {
  
  if (!course) return null;
 
  
  
  return (
    <Link to={'/course/' + course._id} onClick={()=>scroll(0,0,)}>
    <div className='max-sm:w-70 cursor-pointer border-1 border-[#d4d0d0d4] shadow-lg w-80 rounded-xl overflow-hidden'>
      <img className='w-80 h-40 opacity-90 hover:opacity-100' src={course.courseThumbnail} alt="CourseThumbnail" />
      <div className='p-3 flex flex-col gap-1'>
        <h2 className='font-bold text-[18px]'>{course.courseTitle} </h2>
        <p className='text-gray-600 font-bold'>{course.educator.name}GreatStack</p>
        <div className='flex gap-4 text-center'>
          <p>4.5</p>
          <div className='flex gap-1'>{[...Array(5)].map((_,idx)=>(<img className='h-4 w-4' key={idx} src={assets.star}/>))}</div>
          <p>(22)</p>
        </div>
        <p className='font-extrabold'>${(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}</p>
      </div>
    </div>
    </Link>
  )
}

export default CourseCard