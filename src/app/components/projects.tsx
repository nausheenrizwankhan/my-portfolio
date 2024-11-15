import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      name: "Ecommerce Website",
      details: "An eCommerce store is an online platform that enables businesses to sell products and services directly to customers via the internet. It offers a convenient shopping experience, allowing users to browse, select, and purchase items from anywhere at any time.",
      link: "#",
      image: "/1sshot.png",
    },
    {
      name: "Small Business",
      details: "A small business is an independently owned and operated company, typically with a limited number of employees and lower revenue compared to larger corporations. Small businesses play a vital role in local economies, offering personalized services and unique products to their communities.",
      link: "#",
      image: "/screens3.png",
    },
    {
      name: "Toy Store",
      details: "A toy store is a retail shop specializing in selling toys, games, and educational products for children of all ages. It offers a wide variety of fun and engaging items that spark creativity, learning, and play.!",
      link: "#",
      image: "/screenshot2.png",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Projects
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-wrap -m-4">
          {projects.map((item, i) => (
            <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative h-64">
                <Image
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={item.image} // Corrected image path
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">
                  <h2 className="text-lg font-semibold tracking-tight">
                    {item.name}
                  </h2>
                  <p className="mt-3 leading-relaxed line-clamp-3">
                    {item.details}
                  </p>
                  <Link
                    href={item.link}
                    target="_blank"
                    className="mt-4 text-sm font-semibold tracking-tight hover:text-blue-500 hover:underline"
                  >
                    <p className="mt-3">View Project</p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Projects;
