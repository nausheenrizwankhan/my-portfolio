"use client";

import { useEffect } from "react";
// for animate on scroll library
import AOS from "aos";
import "aos/dist/aos.css";
// my components
import { Detail } from "./detail";
import { Sidebar } from "./sidebar";
import MobileCard from "./mobileComponents/card";
// Placeholder MobileCard component (define or import it if it exists elsewhere)


const MainPage = () => {
  // useEffect for AOS
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <div>
      {/* mobile view */}
      <div className="overflow-x-hidden bg-white h-screen md:hidden">
        {/* card */}
        <MobileCard />
        {/* education */}
        {/* experience */}
        {/* skills */}
        {/* projects */}
      </div>
      {/* desktop view */}
      <div className="hidden md:flex md:overflow-hidden md:h-screen">   
        {/* side bar */}
        <div className="w-1/5">
          <Sidebar />
        </div>
        {/* main */}
        <div className="w-full">
          <Detail />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
