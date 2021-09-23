import Interweave from "interweave";

const Preview = ({ citePreview }) => {
  return (
    <div className="flex flex-col items-center justify-around max-w-4xl mt-10 sm:w-full">
      <div
        href="https://nextjs.org/docs"
        className="p-6 mt-6 text-left border w-full rounded-xl "
      >
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Citation Preview</h3>
          <span className="flex justify-end">
            <button className="cursor-pointer flex flex-row bg-gray-100 text-gray-700 hover:text-gray-50 hover:bg-purple-500 py-2 px-3 rounded-md mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              EDIT
            </button>
            <button className="cursor-pointer flex flex-row bg-gray-100 text-gray-700 hover:text-gray-50 hover:bg-purple-500 py-2 px-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              COPY
            </button>
          </span>
        </div>
        <div className="mt-4 text-base font-light select-all text-black">
          <Interweave content={citePreview} />
        </div>
      </div>
      <div className="mt-4 flex justify-end items-center uppercase">
        <button className="cursor-pointer bg-purple-600 text-gray-50 hover:text-white hover:bg-purple-700 py-2 px-3 rounded-md">
          Add to reference list
        </button>
      </div>
    </div>
  );
};

export default Preview;
