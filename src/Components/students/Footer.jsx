import React from "react";
import { assets } from "../../assets/assets.js";
import SearchBar from '../../Components/students/SearchBar.jsx'

const Footer = () => {
  return (
    <footer className="bg-gray-900 mt-20 py-10 px-18 max-sm:px-2">
      <div className="flex flex-wrap items-baseline-last justify-between">
        <div className="">
          <div className="flex items-center gap-3 ">
            <img
              className="h-13 w-13 object-cover"
              src={assets.logo}
              alt="logo"
            />
            <h1 className="text-white text-2xl">Learn Basic</h1>
          </div>
          <p className="text-gray-400 w-80 max-sm:w-60 py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            blanditiis, neque perspiciatis error quasi amet, excepturi delectus
            totam in facere incidunt maiores, beatae dolor quaerat!
          </p>
        </div>
        <div className="text-white ">
          <h1 className="text-2xl pb-8">Company</h1>
          <div className="text-gray-400 flex flex-col gap-2">
            <ul>Home</ul>
            <ul>About Us</ul>
            <ul>Contact Us</ul>
            <ul>Private Policy</ul>
          </div>
        </div>
        <div className="text-white">
          <div className="pb-13">
            <h1 className="text-2xl">Subscribe To Our Newsiter</h1>
            <p className="text-gray-400 w-80 pt-5 max-sm:w-60">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          
          </div>
           <SearchBar /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
