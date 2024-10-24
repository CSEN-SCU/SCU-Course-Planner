"use client"; // "The component gets prerendered with SSR or ISR/SSG if possible on the server. The html is send to the client and the javascript is send too. So it gets hydrated on the client and is interactive"

import AddClass from "@/components/AddClass/AddClass";
import AddClassTemplate from "@/components/AddClass/AddClassTemplate";
import Course from "@/components/course";
import Quarter from "@/components/Quarter";
import React, { Dispatch, useState, SetStateAction } from "react";
import { userCourses } from "@/components/UserData/userCourses";

export default function Home() {
  const [isAddingClass, setAddingClass]: [
    boolean,
    Dispatch<SetStateAction<boolean>>
  ] = useState(false);
  const [selectedQuarter, setSelectedQuarter]: [
    [string, string],
    Dispatch<SetStateAction<[string, string]>>
  ] = useState(["", ""]);

  return (
    <div className="grid grid-cols-3 items-start justify-items-center min-h-screen p-8 pb-10 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* userCourses is a .ts file filled with Dummy course data for testing */}
      {userCourses.map(({ season, year, courses }, index) => (
        <div key={index} className="border-2 #000 p-4 rounded-lg w-96 h-auto">
          <Quarter quarterSeason={season} year={year}></Quarter>
          {courses.map((course, idx) => (
            <Course
              key={idx}
              courseName={course.name}
              id={course.id}
              unit={course.unit}
            />
          ))}
          {isAddingClass &&
            selectedQuarter[0] === season &&
            selectedQuarter[1] === year && (
              <AddClassTemplate
                courseName={"test"}
                courseId={"test"}
                units={"5"}
              />
            )}
          <AddClass
            setAddingClass={setAddingClass}
            setSelectedQuarter={setSelectedQuarter}
            season={season}
            year={year}
          />
        </div>
      ))}
    </div>
  );
}
