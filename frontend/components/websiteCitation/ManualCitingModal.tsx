import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { CitingMetaData } from "../types/CitingMetaData";

interface ManualCitingModalProps {
  metadata: CitingMetaData;
  handleManualCite: (metadata: CitingMetaData) => void;
}

export default function ManualCitingModal({
  metadata,
  handleManualCite,
}: ManualCitingModalProps) {
  const [open, setOpen] = useState(false);
  const [authors, setAuthors] = useState<string[]>([""]);
  const [author1, setAuthor1] = useState<string>(
    metadata.authors?.length == 1 ? metadata.authors[0] : ""
  );
  const [author2, setAuthor2] = useState<string>(
    metadata.authors?.length == 2 ? metadata.authors[1] : ""
  );
  const [date, setDate] = useState<string>(metadata.date);
  const [title, setTitle] = useState<string>(
    metadata.title ? metadata.title : ""
  );
  const [publisher, setPublisher] = useState<string>(
    metadata.publisher ? metadata.publisher : ""
  );
  const [url, setUrl] = useState<string>(metadata.url ? metadata.url : "");

  const citeButtonClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    let manualCitingData = {
      ...metadata,
      authors: [author1, author2],
      date: date,
      title: title,
      publisher: publisher,
      url: url
    };
    // console.log(manualCitingData);
    handleManualCite(manualCitingData);
    setOpen(false);
    e.preventDefault();
  };

  return (
    <>
      <div className="">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="cursor-pointer flex flex-row bg-gray-100 text-gray-700 hover:text-gray-50 hover:bg-purple-500 p-2 rounded-md uppercase text-sm mr-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
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
          Edit
        </button>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-20 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
          <div
            className="flex min-h-screen text-center md:block md:px-2 lg:px-4"
            style={{ fontSize: 0 }}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden md:inline-block md:align-middle md:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
                <div className="w-full relative flex flex-col bg-white px-8 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-10 lg:p-12">
                  <Dialog.Title
                    as="h3"
                    className="text-3xl font-medium leading-6 text-gray-900 mt-2 text-center"
                  >
                    Manual Citation
                  </Dialog.Title>
                  <button
                    type="button"
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                  <div className="mt-2">
                    <form className="mt-10">
                      <div className="grid grid-cols-8 gap-4">
                        <div className="col-span-6 sm:col-span-2 self-center">
                          <h1>Author </h1>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Author 1
                          </label>
                          <input
                            type="text"
                            value={author1}
                            onChange={(e) => setAuthor1(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                          <label className="block text-sm font-medium text-gray-700">
                            Author 2
                          </label>
                          <input
                            type="text"
                            value={author2}
                            onChange={(e) => setAuthor2(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2 self-center">
                          <h1>Published Date</h1>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>

                        <div className="col-span-6 sm:col-span-2 self-center">
                          <h1>Title</h1>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2 self-center">
                          <h1>Publisher</h1>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <input
                            type="text"
                            value={publisher}
                            onChange={(e) => setPublisher(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2 self-center">
                          <h1>URL</h1>
                        </div>
                        <div className="col-span-6 sm:col-span-6">
                          <input
                            type="text"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            className="mt-1 focus:ring-purple-500 focus:border-purple-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 sm:col-span-2 self-center mt-2"></div>
                        <div className="col-span-6 sm:col-span-2 self-center mt-2">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded-sm text-purple-500 mr-2 focus:outline-none focus:ring-opacity-0 focus:ring-purple-400"
                          />
                          <label>No published date</label>
                        </div>
                        <div className="col-span-6 sm:col-span-2 self-center mt-2">
                          <input
                            type="checkbox"
                            className="form-checkbox rounded-sm text-purple-500 mr-2 focus:outline-none focus:ring-opacity-0 focus:ring-purple-400"
                          />
                          <label>More than 2 authors</label>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="flex flex-row items-center justify-center mt-10">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 uppercase"
                      onClick={citeButtonClicked}
                    >
                      Manual Cite
                    </button>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
