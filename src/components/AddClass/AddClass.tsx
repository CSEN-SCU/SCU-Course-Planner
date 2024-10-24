import React from "react";

interface addClassProp {
  setAddingClass: React.Dispatch<React.SetStateAction<boolean>>
}
const AddClass: React.FC<addClassProp> = ({setAddingClass}) => {
  return(
    <div className="items-center flex">
      <div className="rounded-sm transition ease-in-out delay-10 bg-slate-500 shadow-md hover:bg-slate-400 active:bg-slate-500 text-center p-2 mt-2">
        <button onClick={() => {setAddingClass(true); console.log("Adding Class!")}}>
          <text className="text-center text-white">Add Class</text>
        </button>
      </div>
    </div>
  )
}

export default AddClass