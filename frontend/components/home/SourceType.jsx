import React from "react";

const SourceType = ({sourceSelected, handleSourceSelected}) => {
  return (
    <div className="mt-10 justify-self-center">
      <div className="flex text-gray-700">
        <div className="flex h-8 font-medium ">
          <div
            className={
              sourceSelected === "website"
                ? "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-indigo-600"
                : "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-transparent"
            }
            onClick={() => handleSourceSelected("website")}
          >
            Website
          </div>
          <div
            className={
              sourceSelected === "paper"
                ? "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-indigo-600"
                : "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-transparent"
            }
            onClick={() => handleSourceSelected("paper")}
          >
            Journal Paper
          </div>
          <div
            className={
              sourceSelected === "book"
                ? "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-indigo-600"
                : "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-transparent"
            }
            onClick={() => handleSourceSelected("book")}
          >
            Book
          </div>
          <div
            className={
              sourceSelected === "others"
                ? "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-indigo-600"
                : "md:flex mr-6 justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-in-out  border-b-4 border-transparent"
            }
            onClick={() => handleSourceSelected("others")}
          >
            Others
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceType;
