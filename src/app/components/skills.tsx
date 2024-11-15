import React from 'react'
import {Card,CardContent,CardHeader,CardTitle,} from "@/components/ui/card"
import { FaCheckSquare } from "react-icons/fa";
const Skills = () => {
  return (
    <Card data-aos="zoom-in"className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
        Skills
          </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
      {/* skills here */}
    <div className="flex flex-wrap -m-4">
     {/* Html */}
  <div className="p-4  w-full md:w-1/3 ">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
  <FaCheckSquare className="text-white text-lg" />
  </div>
  <h2 className="text-lg font-semibold tracking-tight">
      HTML
      </h2>
     </div>
     <div className="w-full h-1 rounded-lg bg-gray-500">
     <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
     </div>
     <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">100%</h3>
    </div>
     {/* css */}
  <div className="p-4  w-full md:w-1/3 ">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
  <FaCheckSquare className="text-white text-lg" />
  </div>
  <h2 className="text-lg font-semibold tracking-tight">
      CSS
      </h2>
     </div>
     <div className="w-full h-1 rounded-lg bg-gray-500">
     <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
     </div>
     <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">97%</h3>
    </div>
     {/* typescript/js*/}
  <div className="p-4  w-full md:w-1/3 ">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
  <FaCheckSquare className="text-white text-lg" />
  </div>
  <h2 className="text-lg font-semibold tracking-tight">
      Javascript/Typescript
      </h2>
     </div>
     <div className="w-full h-1 rounded-lg bg-gray-500">
     <div className="w-[90%] h-1 bg-blue-500 rounded-lg"/>
     </div>
     <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">90%</h3>
    </div>
     {/* next.js */}
  <div className="p-4  w-full md:w-1/3 ">
  <div className="flex items-center mb-3">
    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
  <FaCheckSquare className="text-white text-lg" />
  </div>
  <h2 className="text-lg font-semibold tracking-tight">
    NEXT.JS
      </h2>
     </div>
     <div className="w-full h-1 rounded-lg bg-gray-500">
     <div className="w-[100%] h-1 bg-blue-500 rounded-lg"/>
     </div>
     <h3 className="text-blue-500 text-sm text-right font-semibold tracking-tight">75%</h3>
    </div>
    </div>
  </CardContent>
 </Card>
 );
};
export default Skills;

