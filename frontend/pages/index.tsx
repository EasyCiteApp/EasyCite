import { Fragment, useEffect, useState, useReducer } from "react";
import Head from "next/head";
import Image from 'next/image';
import SourceType from "../components/home/SourceType";
import SearchBar from "../components/home/SearchBar";
import dynamic from "next/dynamic";
import axios from "../components/axios";
import { toast } from "react-toastify";

// const DynamicCitation = dynamic(() => import("../components/home/Citation"), {
//   ssr: false,
// });

import { CitingSources } from "../components/types/CitingSources";

export default function Home() {
  // const [styleSelected, setStyleSelected] = useState(availableStyles[0]);
  
  // const [citeInput, setCiteInput] = useState("");

  // const [metadata, setMetaData] = useState(null);

  const INIT_SOURCE: CitingSources = "website";

  const [sourceSelected, setSourceSelected] = useState<CitingSources>(INIT_SOURCE);

  const handleSourceSelected = (type: CitingSources) => {
    setSourceSelected(type);
    console.log(type);
  };

  // const handleStyleSelected = (style) => {
  //   setStyleSelected(style);
  //   console.log(style.citationFile);
  // };

  // const handleInputChange = (e) => {
  //   setCiteInput(e.target.value);
  //   e.preventDefault();
  // };

  // const handleInputSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(citeInput);
  //   console.log(sourceSelected);
  //   console.log(styleSelected);
    
  //   switch (sourceSelected) {
  //     case "website":
  //       axios
  //         .post(`/sources/${sourceSelected}`, {
  //           url: citeInput,
  //         })
  //         .then((res) => {
  //           console.log(res);
  //           setMetaData(res.data.data.metadata);
  //         })
  //         .catch((error) => {
  //           toast.error(
  //             error.response?.data?.message ??
  //               "Server Error! Please try again later"
  //           );
  //         });
  //       break;
  //     case "book":
  //       toast.error("We haven't support book citation yet");
  //       break;
  //     case "article":
  //       toast.error("We haven't support article citation yet");
  //       break;
  //     case "others":
  //       toast.error("We haven't support other citation yet");
  //       break;
  //     default:
  //       toast.error("Please select a valid citation source");
  //   }
  // };

  return (
    <>
      <Head>
        <title>Easy Cite</title>
        <link rel="icon" href="/easycite-logo.png" />
      </Head>
      <main className="flex flex-col items-center min-h-screen w-full flex-1 px-20 text-center">
        <Image src="/easycite.png" height={253} width={400} alt="Easy Cite Main Logo" />
        <h1 className="text-6xl font-bold">Citations made easy</h1>
        <SourceType
          sourceSelected={sourceSelected}
          handleSourceSelected={handleSourceSelected}
        />
        {/* <SearchBar
          citationStyles={availableStyles}
          styleSelected={styleSelected}
          handleStyleSelected={handleStyleSelected}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
        /> */}
        {/* {metadata && <DynamicCitation />} */}
      </main>
    </>
  );
}

// Home.getInitialProps = async () => {
//   const response = await axios.get("/styles");
//   const availableStyles = await response.data.data.availableStyles;

//   return {
//     availableStyles: availableStyles
//   }
// }
