import React from "react";

interface AddClassTemplateProps {
  courseName?: string;
  courseId?: string;
  units?: string;  
}

const AddClassTemplate: React.FC<AddClassTemplateProps> = ({ courseName, courseId, units }) => {
  return (
    <div className="border-2 #000 border-dashed p-4 rounded-md shadow-md px-10 mt-2 bg-slate-50">
      <h2 className="text-lg font-semibold">{courseName}</h2>
      <p>ID: {courseId}</p>
      <p>Unit: {units}</p>
    </div>
  );
};

export default AddClassTemplate;
