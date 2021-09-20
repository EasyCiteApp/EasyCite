import React from "react";

const Preview = () => {
  return (
    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
      <a
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left border w-full rounded-xl hover:text-blue-600 focus:text-blue-600"
      >
        <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
        <p className="mt-4 text-xl">
          Find in-depth information about Next.js features and API.
        </p>
      </a>
    </div>
  );
};

export default Preview;
