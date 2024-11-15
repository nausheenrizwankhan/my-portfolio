import React from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Education = () => {
  //My Education here//
  const education =[
 {
  uniName:"Karachi University ",
  date:"April 2001",
  field :"b.Sc",
  details:"I completed my BSc in Medical from Karachi University, gaining a strong foundation in medical sciences and related disciplines. This academic experience equipped me with essential knowledge in health and biological sciences."

 },
 {
  uniName:"Karachi University ",
  date:"november 2005",
  field :"b.Ed",
  details:"I completed my B.Ed. professional teaching degree from Karachi University, which equipped me with essential teaching skills and methodologies. This program strengthened my ability to educate effectively and manage diverse learning environments.."

 },

];
  return (
    <Card data-aos="zoom-in"className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Education
          </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
    <div className="-my-8 divide-y-2 divide-gray-100">
      {/*bachlors*/}
      {education.map((item,i) => (
      <div key={i} className ="py-8 flex flex-wrap md:flex-nowrap">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
          <span className="font-semibold title-font text-gray-700 uppercase">
          {item.field}
          </span>
          <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
        </div>
        <div className="md:flex-grow">
          <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
            {item.uniName}
          </h2>
          <p className="leading-relaxed">
          {item.details}
          </p>
      </div>
    </div>
  ))}
  </div>
</CardContent>
</Card>
 );
};

export default Education;
