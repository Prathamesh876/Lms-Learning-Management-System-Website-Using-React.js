import React from "react";

const Companies = () => {
  return (
    <div className="text-center  my-20 shadow-lg  max-sm:my-13 py-5 bg-[#6b6a6a16]">
      <h1 className="max-sm:leading-13 max-sm:text-4xl text-5xl font-extrabold text-black pt-2 max-sm:pb-5 pb-10 uppercase">Our Hiring Partners</h1>
      <div className="flex flex-wrap items-center justify-evenly px-8 gap-6 max-sm:gap-2 ">
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://cdn.freelogovectors.net/svg05/infosys_logo.svg"
          alt="infosys_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://dist.neo4j.com/wp-content/uploads/20210830115959/TCS_Logo.png"
          alt="TCS_Logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://companieslogo.com/img/orig/WIT-1453b096.png?t=1648406781"
          alt="Wipro_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://logos-world.net/wp-content/uploads/2023/03/Cognizant-Logo-2018.png"
          alt="Cognizant_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://www.pngall.com/wp-content/uploads/15/Oracle-Logo-PNG-HD-Image.png"
          alt="Oracle_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt="Google_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://logos-world.net/wp-content/uploads/2020/08/Dell-Logo-1989-2016.png"
          alt="Dell_logo"
        />
        <img
          className="h-12 sm:h-16 lg:h-20 w-auto object-contain filter brightness-0 hover:brightness-100 transition duration-300"
          src="https://logos-world.net/wp-content/uploads/2020/09/Nokia-Logo.png"
          alt="Nokia_logo"
        />
      </div>
    </div>
  );
};

export default Companies;
