import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";
import dynamic from "next/dynamic";
import axios from "../components/axios";
import GetAuthor from "../utils/GetAuthor";

const DynamicPreview = dynamic(() => import("../components/home/Preview"), {
  ssr: false,
});

export default function Home() {
  const [sourceSelected, setSourceSelected] = useState("website");
  const [availableStyles, setAvailableStyles] = useState([
    { citationName: "Select style" },
  ]);
  const [styleSelected, setStyleSelected] = useState(availableStyles[0]);

  const [citeInput, setCiteInput] = useState("");
  const [citePreview, setCitePreview] = useState("");

  useEffect(() => {
    axios
      .get("/styles")
      .then((res) => {
        setAvailableStyles(res.data.data.availableStyles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
            let authors = GetAuthor(res.data.data.metadata);
            console.log(authors);

            let data = {
              ...res.data.data.metadata,
              authors: authors,
              style: styleSelected.citationFile,
              type: sourceSelected,
            };
            return axios.post("/cite", data);
          })
          .then((res) => {
            setCitePreview(res.data.data[0]);
          })
          .catch((error) => {
            console.log(error);
          });
          break;
      case "book":
        alert("We haven't support book citation yet");
        break;
      case "article":
        alert("We haven't support article citation yet");
        break;
      case "others":
        alert("We haven't support other citation yet");
        break;
      default:
        alert("Please select a valid citation source");
    }
  };

  return (
    <>
      <Head>
        <title>Easy Cite</title>
        <link rel="icon" href="/easycite-logo.png" />
      </Head>
      <main className="flex flex-col items-center m-0 min-h-screen w-full flex-1 px-20 text-center">
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
        {citePreview !== "" && <DynamicPreview citePreview={citePreview} />}
      </main>
    </>
  );
}
