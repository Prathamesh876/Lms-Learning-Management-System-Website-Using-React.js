import React from 'react'
import {Routes,Route,useMatch} from 'react-router-dom'
import Navbar from './Components/students/Navbar'
import Home from './pages/students/Home'
import CoursesList from './pages/students/CoursesList'
import CourseDetails from './pages/students/CourseDeatils'
import MyEnrollments from './pages/students/MyEnrollments'
import Player from './pages/students/Player'
import Loading from './Components/students/Loading'
import Educator from './pages/educator/Educator'
import Dashbord from './pages/educator/Dashbord'
import AddCourse from './pages/educator/AddCourse'
import MyCourses from './pages/educator/MyCourses'
import StudentsEnrolled from './pages/educator/StudentsEnrolled'

const App = () => {

  const isEducatorPage=useMatch('/educator/*')

  return (
    <>
       <div className='text-default min-h-screen bg-white'>
        {!isEducatorPage && <Navbar />}
        
        <Routes> 
          <Route path='/' element={<Home />}/>  
          <Route path='/course-list' element={<CoursesList />}/> 
          <Route path='/course-list/:input' element={<CoursesList />}/> 
          <Route path='/course/:id' element={<CourseDetails />}/>  
          <Route path='/my-enrollments' element={<MyEnrollments />}/> 
          <Route path='/player/:courseId' element={<Player />}/>  
          <Route path='/loading/:path' element={<Loading />}/>  
          <Route path='/educator' element={<Educator />}>
             <Route path='educator' element={<Dashbord />}/>
             <Route path='add-course' element={<AddCourse />}/>
             <Route path='my-courses' element={<MyCourses />}/>
             <Route path='student-enrolled' element={<StudentsEnrolled />}/>


          </Route>

        </Routes>
        </div>
    </>
  )
}

export default App