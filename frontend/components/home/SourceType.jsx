import React from 'react'

const SourceType = () => {
  return (
    <div className="mt-10 justify-self-center">
      <div className="flex text-gray-700">
        <div className="flex h-8 font-medium ">
            <div className="w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-b-2 border-gray-600">Website</div>
            <div className="w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-b-2 border-transparent">Paper</div>
            <div className="w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-b-2 border-transparent">Book</div>
            <div className="w-20 md:flex justify-center items-center hidden  cursor-pointer leading-5 transition duration-150 ease-in  border-b-2 border-transparent">Others</div>
        </div>
    </div>
    </div>
  )
}

export default SourceType
