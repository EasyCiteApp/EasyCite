import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import SourceType from "../components/home/SourceType";
import SearchBar from "../components/home/SearchBar";
import dynamic from "next/dynamic";
import axios from "../components/axios";
import { AxiosError } from "axios";
import { toast } from "react-toastify";

import { CitingSource } from "../components/types/CitingSource";
import { CitingStyle } from "../components/types/CitingStyle";

const DynamicWebsiteCitation = dynamic(
  () => import("../components/websiteCitation/WebsiteCitation"),
  {
    ssr: false,
  }
);

interface HomeProps {
  availableStyles: CitingStyle[];
}

export default function Home({ availableStyles }: HomeProps) {
  // Citation Sources
  const INIT_SOURCE: CitingSource = "website";

  const [sourceSelected, setSourceSelected] =
    useState<CitingSource>(INIT_SOURCE);

  const handleSourceSelected = (type: CitingSource) => {
    setSourceSelected(type);
  };

  // Citation Styles
  const [styleSelected, setStyleSelected] = useState(availableStyles[0]);

  const handleStyleSelected = (style: CitingStyle) => {
    setStyleSelected(style);
  };

  // Citation Input
  const [citeInput, setCiteInput] = useState("");
  const [metadata, setMetaData] = useState(null);

  const handleInputChange = (input: string) => {
    setCiteInput(input);
  };

  const handleInputSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    switch (sourceSelected) {
      case "website":
        try {
          const response = await axios.post(`/sources/${sourceSelected}`, {
            url: citeInput,
          });
          const citationMetadata = await response.data.data.metadata;
          console.log(citationMetadata);
          setMetaData(citationMetadata);
        } catch (err) {
          toast.error(
            (err as AxiosError).response?.data?.message ??
              "Server Error! Please try again later"
          );
        }
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
        <Image
          src="/easycite.png"
          height={253}
          width={400}
          alt="Easy Cite Main Logo"
        />
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
        {metadata && (
          <DynamicWebsiteCitation
            metadata={metadata}
            styleSelected={styleSelected}
            sourceSelected={sourceSelected}
          />
        )}
      </main>
    </>
  );
}

Home.getInitialProps = async () => {
  const response = await axios.get("/styles");
  const availableStyles: CitingStyle[] = await response.data.data.availableStyles;

  return {
    availableStyles: availableStyles,
  };
};
