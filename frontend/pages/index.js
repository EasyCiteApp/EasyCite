import { Fragment, useEffect, useState } from "react";
import Head from "next/head";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";
import dynamic from "next/dynamic";
import Interweave from 'interweave';
import axios from "../components/axios";

const DynamicPreview = dynamic(() => import("../components/home/Preview"), {
  ssr: false,
});

export default function Home() {
  const [sourceSelected, setSourceSelected] = useState("website");
  const [styleSelected, setStyleSelected] = useState(null);
  const [citationStyles, setCitationStyles] = useState([]);

  const [citeInput, setCiteInput] = useState("");
  const [citeInfo, setInfo] = useState("");

  useEffect(() => {
    axios
      .get("/styles")
      .then((res) => {
        console.log(res.data.data.availableStyles);
        setCitationStyles(res.data.data.availableStyles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSourceSelected = (type) => {
    console.log(type);
    setSourceSelected(type);
  };

  const handleStyleSelected = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setStyleSelected(e.target.value);
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    setCiteInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    console.log(citeInput);
    console.log(sourceSelected);
    console.log(styleSelected);
    axios
      .post(`/sources/${sourceSelected}`, {
        url: citeInput,
      })
      .then((res) => {
        console.log(res.data.data.metadata);
        let data = {
          ...res.data.data.metadata,
          style: styleSelected,
          type: sourceSelected,
        };
        return axios.post("/cite", data);
      })
      .then((res) => {
        console.log(res.data.data[0]);
        console.log(typeof res.data.data[0]);
        setInfo(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
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
          citationStyles={citationStyles}
          handleStyleSelected={handleStyleSelected}
          handleInputChange={handleInputChange}
          handleInputSubmit={handleInputSubmit}
        />
        {citeInfo !== "" && <DynamicPreview citeInfo={citeInfo} />}
      </main>
    </>
  );
}
