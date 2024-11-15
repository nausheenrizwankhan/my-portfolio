import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Link from"next/link";
import React from 'react';

export function Sidebar() {
  return (
    <div className=" h-screen flex flex-col justify-center items-center p-3">
      {/*image*/}
        <Image src= "/profile1.png" alt="profile-pic" width={200} height={200}
        className="rounded-md"/>

         {/*Name here*/}
         <div className="mt-2">
         <h1 className="text-2xl font-bold tracking-tight uppercase">NausheenKhan</h1>
         <h2 className="text-md text-center font-semibold tracking-tight text-gray-600 ">
         <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer','front-endDeveloper','web Designer','nextjs','Geophysicist','GIS Analyst'],
    autoStart: true,
    loop: true,
     }}
    />
         </h2>
        </div>
          {/*Social Media Account*/}
          <div className="grid grid-cols-3 gap-2 ">
            {/*linkedin*/}
            <div className="mt-4"> 
            <Link href="#" target="_blank" className=" text-gray-600  hover:text-[#0762C8]">
            <FaLinkedin  className="text-4xl text-gray-600"/>
            </Link>
            </div>
            {/*youtube*/}
            <div className="mt-4"> 
            <Link 
            href="#"
             target="_blank" 
             className=" text-gray-600  hover:text-[#FF0000]"
            >
            <FaYoutubeSquare  className="text-4xl"/>
            </Link>
            </div>
            {/*github*/}
            <div className="mt-4"> 
            <Link href="#" 
            target="_blank" 
            className=" text-gray-600  hover:text-[#6e5494]"
            >
            <FaGithubSquare  className="text-4xl"/>
            </Link>
            </div>
         </div>
          {/*Download CV Button*/}
          <Link href={'#'} className="mt-4">
          </Link>
          <Button>
             <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
    </Button>

        </div>
  );
}
