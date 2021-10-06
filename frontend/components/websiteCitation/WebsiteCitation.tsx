import { Fragment, useEffect, useState, useReducer } from "react";
import Interweave from "interweave";
import GetAuthor from "../../utils/GetAuthor";
import axios from "../axios";
import { toast } from "react-toastify";

import { CitingMetaData } from "../types/CitingMetaData";
import { CitingSource } from "../types/CitingSource";
import { CitingStyle } from "../types/CitingStyle";

import useRequest from "../libs/useRequest";
import SkeletonCard from "../layout/SkeletonCard";
import ManualCitingModal from "./ManualCitingModal";

interface CitationProps {
  metadata: CitingMetaData;
  styleSelected: CitingStyle;
  sourceSelected: CitingSource;
}

const WebsiteCitation = ({
  metadata,
  styleSelected,
  sourceSelected,
}: CitationProps) => {
  let authors = GetAuthor(metadata);
  let citingData = {
    ...metadata,
    authors: authors,
    style: styleSelected.citationFile,
    type: sourceSelected,
  };

  const { data, error } = useRequest<{
    status: string;
    data: string[];
  }>({
    method: "post",
    url: "/cite",
    data: citingData,
  });

  if (!data) {
    return (
      <SkeletonCard/>
    );
  }

  return (
    <div className="flex flex-col items-center justify-around max-w-4xl mt-10 sm:w-full">
      <div className="p-6 mt-6 text-left border w-full rounded-xl ">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold">Citation Preview</h3>
          <span className="flex justify-end">
            <ManualCitingModal/>
            <button className="cursor-pointer flex flex-row bg-gray-100 text-gray-700 hover:text-gray-50 hover:bg-purple-500 p-2 rounded-md uppercase text-sm">
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
                  d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                />
              </svg>
              Copy
            </button>
          </span>
        </div>
        <div className="mt-4 text-base font-light select-all text-black">
          <Interweave content={data.data[0]} />
        </div>
      </div>
      <div className="mt-6 flex justify-end items-center">
        <button className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-black border border-transparent rounded-md hover:bg-purple-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500 uppercase">
          Add to reference list
        </button>
      </div>
    </div>
  );
};

export default WebsiteCitation;
