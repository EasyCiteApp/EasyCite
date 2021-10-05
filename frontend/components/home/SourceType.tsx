import React from "react";
import  { CitingSource } from "../types/CitingSource"; 

interface SourceTypeProps {
  sourceSelected: CitingSource,
  handleSourceSelected: (source: CitingSource) => void
}

const SourceType = ({sourceSelected, handleSourceSelected}: SourceTypeProps) => {
  const sourceTypes: CitingSource[] = ["website", "book", "article", "others"]
  return (
    <div className="mt-10 justify-self-center">
      <div className="flex text-gray-700">
        <div className="flex h-8 font-medium ">
          {sourceTypes.map((source, index) => (
            <div key={index}
            className={
              sourceSelected === `${source}`
                ? "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 capitalize border-purple-600"
                : "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 capitalize border-transparent"
            }
            onClick={() => handleSourceSelected(source)}
          >
            {source}
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SourceType;
