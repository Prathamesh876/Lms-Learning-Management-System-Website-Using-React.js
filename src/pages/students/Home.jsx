import React from 'react'
import Hero from '../../Components/students/Hero'
import CourseCard from '../../Components/students/CourseSection'
import TestimonialSection from '../../Components/students/TestimonialSection'
import Companies from '../../Components/students/Companies'
import CallToAction from  '../../Components/students/CallToAction'
import Footer from  '../../Components/students/Footer'


const Home = () => {
  return (
    <div className='max-sm:pt-5 sm:pt-10 '>
      <Hero />
      <CourseCard />
      <Companies />
      <TestimonialSection />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home