import { Input } from "@/components/ui/input";
import React from "react";
/*
 * This component is the "popup" that appears when a user clicks the "Add Class" button.  
 * The goal is to have the user fill out the number of units, course name, and course ID.
 */
interface AddClassTemplateProps {
  courseName?: string;
  courseId?: string;
  units?: string;  
}

const AddClassTemplate: React.FC<AddClassTemplateProps> = ({ courseName, courseId, units }) => {
  return (
    <div className="border-2 #000 border-dashed p-4 rounded-md shadow-md px-10 mt-2 bg-slate-50">
      <Input className="text-lg font-semibold w-3/4"></Input>
      <Input className="mt-2 w-1/2"></Input>
      <Input className="mt-2 w-1/2"></Input>
    </div>
  );
};

export default AddClassTemplate;
