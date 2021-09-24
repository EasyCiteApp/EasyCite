import { Fragment, useEffect, useState, useReducer } from "react";
import Head from "next/head";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";
import dynamic from "next/dynamic";
import axios from "../components/axios";
import GetAuthor from "../utils/GetAuthor";
import { toast } from "react-toastify";
import Loader from "../components/layout/Loader";

const DynamicPreview = dynamic(() => import("../components/home/Preview"), {
  ssr: false,
});

const citationReducer = (state, action) => {
  switch (action.type) {
    case "CITATION_INIT":
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case "CITATION_LOADING":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "CITATION_SUCCESS":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
      };
    case "CITATION_FAILURE":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error();
  }
};

export default function Home() {
  const [sourceSelected, setSourceSelected] = useState("website");
  const [availableStyles, setAvailableStyles] = useState([
    { citationName: "Select style" },
  ]);
  const [styleSelected, setStyleSelected] = useState(availableStyles[0]);

  const [citeInput, setCiteInput] = useState("");
  const [citation, dispatchCitation] = useReducer(citationReducer, {
    data: "",
    isLoading: false,
    isError: false,
  });

  useEffect(() => {
    axios
      .get("/styles")
      .then((res) => {
        setAvailableStyles(res.data.data.availableStyles);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Server Error! Please try again later");
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
    dispatchCitation({ type: "CITATION_LOADING" });
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
            dispatchCitation({
              type: "CITATION_SUCCESS",
              payload: res.data.data[0],
            });
          })
          .catch((error) => {
            dispatchCitation({
              type: "CITATION_FAILURE",
            });
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
        {citation.isLoading && <Loader/>}
        {citation.data !== "" && <DynamicPreview citePreview={citation.data} />}
      </main>
    </>
  );
}
