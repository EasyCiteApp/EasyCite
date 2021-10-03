import { Fragment, useEffect, useState, useReducer } from "react";
import Head from "next/head";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";
import dynamic from "next/dynamic";
import axios from "../components/axios";
import GetAuthor from "../utils/GetAuthor";
import { toast } from "react-toastify";
import Loader from "../components/layout/Loader";

const DynamicCitation = dynamic(() => import("../components/home/Citation"), {
  ssr: false,
});

export default function Home({availableStyles}) {
  const [styleSelected, setStyleSelected] = useState(availableStyles[0]);
  const [sourceSelected, setSourceSelected] = useState("website");
  const [citeInput, setCiteInput] = useState("");

  const [metadata, setMetaData] = useState(null);

  const handleSourceSelected = (type) => {
    setSourceSelected(type);
  };

  const handleStyleSelected = (style) => {
    setStyleSelected(style);
    console.log(style.citationFile);
  };

  const handleInputChange = (e) => {
    setCiteInput(e.target.value);
    e.preventDefault();
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(citeInput);
    console.log(sourceSelected);
    console.log(styleSelected);
    
    switch (sourceSelected) {
      case "website":
        axios
          .post(`/sources/${sourceSelected}`, {
            url: citeInput,
          })
          .then((res) => {
            console.log(res);
            setMetaData(res.data.data.metadata);
          })
          .catch((error) => {
            toast.error(
              error.response?.data?.message ??
                "Server Error! Please try again later"
            );
          });
        break;
      case "book":
        toast.error("We haven't support book citation yet");
        break;
      case "article":
        toast.error("We haven't support article citation yet");
        break;
      case "others":
        toast.error("We haven't support other citation yet");
        break;
      default:
        toast.error("Please select a valid citation source");
    }
  };

  return (
    <>
      <Head>
        <title>Easy Cite</title>
        <link rel="icon" href="/easycite-logo.png" />
      </Head>
      <main className="flex flex-col items-center min-h-screen w-full flex-1 px-20 text-center">
        <img src="/easycite.png" alt="Easy Cite Main Logo" />
        <h1 className="text-6xl font-bold">Citations made easy</h1>
        <SourceType
          sourceSelected={sourceSelected}
          handleSourceSelected={handleSourceSelected}
        />
        <SearchBar
          citationStyles={availableStyles}
          styleSelected={styleSelected}
          handleStyleSelected={handleStyleSelected}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
        />
        {metadata && <DynamicCitation />}
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get("/styles");
  const availableStyles = await response.data.data.availableStyles;

  return {
    availableStyles: availableStyles
  }
}
