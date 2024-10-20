import React from "react";

interface QuarterProps {
  quarterSeason: string;
  year: string;
}

const Quarter: React.FC<QuarterProps> = ({ quarterSeason, year }) => {
  return (
    <div className="border-b-2 #000 p-2">
      <p>{quarterSeason} - {year}</p>
    </div>
  );
};

export default Quarter
