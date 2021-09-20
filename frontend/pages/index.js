import Head from "next/head";
import Preview from "../components/home/Preview";
import SearchBar from "../components/home/SearchBar";
import SourceType from "../components/home/SourceType";

export default function Home() {
  return (
    <>
      <Head>
        <title>Easy Cite</title>
        <link rel="icon" href="/easycite-logo.png" />
      </Head>
      <main className="flex flex-col items-center m-0 min-h-screen w-full flex-1 px-20 text-center">
        <img src="/easycite.png" alt="Easy Cite Main Logo" />
        <h1 className="text-6xl font-bold">Citations made easy</h1>
        <SourceType />
        <SearchBar/>
        <Preview />
      </main>
    </>
  );
}
