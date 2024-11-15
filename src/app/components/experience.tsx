import React from 'react'
import {Card, CardContent,  CardHeader, CardTitle,} from "@/components/ui/card";

const Experience = () => {
  // Experience data
  const experience = [
    {
      compName: "Nooksoft Company",
      dateStart: "April 2021",
      dateEnd: "April 2024",
      position: "Front End Developer",
      details: "Glossier echo park pug church key sartorial biodiesel vexillologist pop-up snack wave ramps cornhole Marfa3 wolf moon party mesentera selfie spoke vaporware kombucha lumbersexual pork belly polaroid hoodie Portland craft beer",
      work: [
        "Developed their official website",
        "Created an e-commerce website for a client",
        "Contributed to team tasks"
      ],
    },
    
    {
      compName: "Insure Tech Company",
      dateStart: "May 2018",
      dateEnd: "April 2020",
      position: "Web Designer",
      details: "I have hands-on experience in web designing, creating visually appealing and user-friendly layouts for various websites. My skills include using modern design tools to ensure responsive and engaging web experiences.",
      work: [
        "Developed their official website",
        "Created an e-commerce website for a client",
        "Contributed to team tasks"
      ],
    },
    {
      compName: "Insure Tech Company",
      dateStart: "May 2017",
      dateEnd: "April 2018",
      position: "Web Designer",
      details: "Glossier echo park pug church key sartorial biodiesel vexillologist pop-up snack wave ramps cornhole Marfa3 wolf moon party mesentera selfie spoke vaporware kombucha lumbersexual pork belly polaroid hoodie Portland craft beer",
      work: [
        "Developed their official website",
        "Created an e-commerce website for a client",
        "Contributed to team tasks"
      ],
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight uppercase">
          Experience
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="-my-8 divide-y-2 divide-gray-100">
          {/* Experience data mapping */}
          {experience.map((item, i) => (
            <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span className="font-semibold title-font text-gray-700 uppercase">
                  {item.position}
                </span>
                <span className="mt-1 text-gray-500 text-sm">{`${item.dateStart} - ${item.dateEnd}`}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-xl font-medium text-gray-900 title-font mb-2 uppercase">
                  {item.compName}
                </h2>
                <ul className="ml-4 list-disc mr-1">
                  {item.work && item.work.map((workItem, i) => (
                    <li key={i}>{workItem}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Experience;
