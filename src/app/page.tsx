'use client'; // "The component gets prerendered with SSR or ISR/SSG if possible on the server. The html is send to the client and the javascript is send too. So it gets hydrated on the client and is interactive" 

import AddClass from "@/components/AddClass/AddClass";
import Course from "@/components/course";
import Quarter from "@/components/Quarter";
import React, { Dispatch, useState, SetStateAction } from "react";

export default function Home() {
  const [isAddingClass, setAddingClass]:[boolean, Dispatch<SetStateAction<boolean>>] = useState(false);

  const courses = [
    { season: "Fall", year: "2021", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Winter", year: "2021", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Spring", year: "2021", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Fall", year: "2022", courses: [
      { name: "Operating Systems", id: "CSEN 177", unit: "4" },
      { name: "Networks", id: "CSEN 146", unit: "4" },
      { name: "Programming Languages", id: "CSEN 171", unit: "4" },
      { name: "Software Engineering", id: "CSEN 174", unit: "4" }
    ]},
    { season: "Winter", year: "2022", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Spring", year: "2022", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Fall", year: "2023", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Winter", year: "2023", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Spring", year: "2023", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Fall", year: "2024", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Winter", year: "2024", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] },
    { season: "Spring", year: "2024", courses: [{ name: "Operating Systems", id: "CSEN 177", unit: "4" }] }
  ];

  return (
    <div className="grid grid-cols-3 items-center justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {courses.map(({ season, year, courses }, index) => (
        <div key={index} className="border-2 #000 p-4 rounded-lg">
          <Quarter quarterSeason={season} year={year}></Quarter>
          {courses.map((course, idx) => (
            <Course key={idx} courseName={course.name} id={course.id} unit={course.unit} />
          ))}
          {isAddingClass && <text>haha!</text>}
          <AddClass setAddingClass={setAddingClass}/>
        </div>
      ))}
    </div>
  );
}
