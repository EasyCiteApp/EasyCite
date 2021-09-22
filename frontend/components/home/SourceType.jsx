import React from "react";

const SourceType = ({sourceSelected, selectSourceType}) => {
  return (
    <div className="mt-10 justify-self-center">
      <div className="flex text-gray-700">
        <div className="flex h-8 font-medium ">
          <div
            className={
              sourceSelected === 1
                ? "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-purple-600"
                : "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-transparent"
            }
            onClick={() => selectSourceType(1)}
          >
            Website
          </div>
          <div
            className={
              sourceSelected === 2
                ? "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-purple-600"
                : "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-transparent"
            }
            onClick={() => selectSourceType(2)}
          >
            Paper
          </div>
          <div
            className={
              sourceSelected === 3
                ? "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-purple-600"
                : "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-transparent"
            }
            onClick={() => selectSourceType(3)}
          >
            Book
          </div>
          <div
            className={
              sourceSelected === 4
                ? "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-purple-600"
                : "w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition-all duration-500 ease-out  border-b-4 border-transparent"
            }
            onClick={() => selectSourceType(4)}
          >
            Others
          </div>
        </div>
      </div>
    </div>
  );
};

export default SourceType;
