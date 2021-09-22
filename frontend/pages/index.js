import { Fragment, useEffect, useRef, useState } from "react";
import Head from "next/head";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";
import dynamic from 'next/dynamic'

const DynamicPreview = dynamic(() => import('../components/home/Preview'), {ssr: false});

export default function Home() {
  const [sourceSelected, setSourceSelected] = useState(1);
  const citationStyles = [
    "APA (5th ed.)",
    "APA (6th ed.)",
    "Harvard Style",
    "IEEE",
  ];

  const selectSourceType = (type) => {
    console.log(type);
    setSourceSelected(type);
    // router.push({
    //   query: { source: type},
    // })
  };

  const handleStyleSelected = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    // router.push({
    //   pathname: '/',
    //   query: { style: e.target.value },
    // })
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
        <SourceType sourceSelected={sourceSelected} selectSourceType={selectSourceType}/>
        <SearchBar citationStyles={citationStyles} handleStyleSelected={handleStyleSelected}/>
        <DynamicPreview />
      </main>
    </>
  );
}
