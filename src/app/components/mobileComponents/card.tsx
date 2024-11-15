import Image from "next/image";
import { Button } from "@/components/ui/button";
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin, FaYoutubeSquare } from "react-icons/fa";
import Link from "next/link";
import React from 'react';

const MobileCard = ()  => {
  return (
    <div data-aos="fade-up" className='h-screen flex flex-col items-center justify-center p-4 bg-blue-300'> 
      <div className="card bg-blue-100 w-full max-w-xs rounded-lg shadow-md p-5 flex flex-col items-center">
        <Image
          src="/profile1.png"
          alt="profile-pic"
          width={200} 
          height={200}
          className="rounded-md mx-auto"
        />
        <div className="card-body text-center mt-4">
          {/* Name */}
          <h1 className="text-2xl font-bold tracking-tight uppercase mb-2">
            Nausheen Khan
          </h1>
          {/* Title with Typewriter effect */}
          <h2 className="text-md font-semibold tracking-tight text-gray-600 mb-4">
            <Typewriter
              options={{
                strings: [
                  'Web Developer', 'UI/UX Designer', 'Front-end Developer', 'Web Designer', 'Next.js Developer', 'Geophysicist', 'GIS Analyst'
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          {/* Social media icons */}
          <div className="flex justify-center gap-4 mb-4">
            <Link href="#" target="_blank" className="text-gray-600 hover:text-[#0762C8]">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" target="_blank" className="text-gray-600 hover:text-[#333]">
              <FaGithubSquare size={24} />
            </Link>
            <Link href="#" target="_blank" className="text-gray-600 hover:text-[#FF0000]">
              <FaYoutubeSquare size={24} />
            </Link>
          </div>
          {/* Download CV Button */}
          <Link href="#" target="_blank" className="w-full">
            <Button className="w-full flex items-center justify-center bg-blue-500 text-white hover:bg-blue-600">
              <FaCloudDownloadAlt className="mr-2 h-4 w-4" /> Download CV
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;


