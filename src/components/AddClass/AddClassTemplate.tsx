import { Input } from "@/components/ui/input";
import React, { useRef, useEffect } from "react";
/*
 * This component is the "popup" that appears when a user clicks the "Add Class" button.
 * The goal is to have the user fill out the number of units, course name, and course ID.
 */
interface AddClassTemplateProps {
  courseName?: string;
  courseId?: string;
  units?: string;
}

const AddClassTemplate: React.FC<AddClassTemplateProps> = ({
  courseName,
  courseId,
  units,
}) => {
  const inputRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  // On component render, this will focus on the first input box
  useEffect(() => {
    if (inputRefs[0].current) {
      inputRefs[0].current.focus();
    }
  }, []);

  // This function allows for arrow keys to be used to go up and down input boxes
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "ArrowDown" && index < inputRefs.length - 1) {
      inputRefs[index + 1]?.current?.focus(); // Move to the next input
    }
    if (e.key === "ArrowUp" && index > 0) {
      inputRefs[index - 1]?.current?.focus(); // Move to the previous input
    }
  };

  return (
    <div className="border-2 #000 border-dashed p-4 rounded-md shadow-md px-10 mt-2 bg-slate-50">
      <Input
        ref={inputRefs[0]}
        placeholder="Course Name"
        className="text-lg font-semibold w-3/4"
        onKeyDown={(e) => handleKeyDown(e, 0)}
      ></Input>
      <Input
        ref={inputRefs[1]}
        placeholder="Course ID"
        className="mt-2 w-1/2"
        onKeyDown={(e) => handleKeyDown(e, 1)}
      ></Input>
      <Input
        ref={inputRefs[2]}
        placeholder="Units"
        className="mt-2 w-1/2"
        onKeyDown={(e) => handleKeyDown(e, 2)}
      ></Input>
    </div>
  );
};

export default AddClassTemplate;
