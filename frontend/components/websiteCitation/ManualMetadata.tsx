import {useState} from "react";
import { CitingMetaData } from "../types/CitingMetaData";

interface ManualMetadataProps {
  metadata: CitingMetaData
}

const ManualMetadata = ({metadata}: ManualMetadataProps) => {
  const [authors, setAuthors] = useState<string[]>([]);
  const [author1, setAuthor1] = useState<string>(metadata.authors?.length == 1 ? metadata.authors[0] : "");
  const [author2, setAuthor2] = useState<string>(metadata.authors?.length == 2 ? metadata.authors[1] : "");
  const [date, setDate] = useState<string>(metadata.date);
  const [title, setTitle] = useState<string>(metadata.title ? metadata.title : "");
  const [publisher, setPublisher] = useState<string>(metadata.publisher ? metadata.publisher  : "");
  const [url, setUrl] = useState<string>(metadata.url ? metadata.url : "");

  return (
    <>
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
          <div className="col-span-6 sm:col-span-2 self-center mt-2">
          </div>
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
    </>
  );
};

export default ManualMetadata;
