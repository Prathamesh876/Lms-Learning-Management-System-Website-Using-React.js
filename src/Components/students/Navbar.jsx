import React,{useContext} from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useLocation } from "react-router-dom";
import { Appcontext } from "../../context/Appcontext";


const Navbar = () => {
  const { pathname } = useLocation();
  const isCourseListPage = pathname.includes("/course-list");
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const {navigate,isEducator} = useContext(Appcontext);
   
   

  return (
    <nav
      className={`font-Lato flex items-center justify-between px-4 py-3 sm:px-14 md:px-12  shadow-[inset_0px_-1px_2px_0px_rgba(0,0,0,0.5)] ${
        isCourseListPage ? "bg-white" : "bg-white"
      }`}
    >
      
        <img
          onClick={()=>{navigate('/')}}
          src={assets.logo}
          alt="Logo"
          className="w-16 lg:w-20 cursor-pointer"
        />
      
      

      <div className="hidden md:flex items-center gap-5 text-black">
        <div className="flex items-center gap-5">
          {user && (
            <>
           
              <button onClick={()=>{navigate('/educator')}} className="text-[#3e1989] hover:underline">
                { isEducator ? `Educator Dashbord`:`Become Educator`}
              </button>
              |
              <Link
                className="text-[#3e1989] hover:underline"
                to="/my-enrollments"
              >
                My Enrollments{" "}
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
            className="bg-[#5e26f8] text-white px-5 py-2 rounded-full hover:bg-[#7444fd] cursor-pointer"
          >
            Create Account
          </button>
        )}
      </div>

      {/* for phone screen  */}

      <div className="md:hidden flex items-center gap-2  max-sm:gap-7  text-black">
        <div className="max-sm:w-[135px] ">
          {user && (
            <>
              <button onClick={()=>{navigate('/educator')}} className="text-[#3e1989] hover:underline">
                { isEducator ? `Educator Dashbord`:`Become Educator`}
              </button>
              |
              <Link
                className="text-[#3e1989] hover:underline"
                to="/my-enrollments"
              >
                My Enrollments{" "}
              </Link>
            </>
          )}
        </div>

        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => {
              openSignIn();
            }}
          >
            <i className="fa-solid fa-circle-user text-3xl text-gray-800"></i>
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
