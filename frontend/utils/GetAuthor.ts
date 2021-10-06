import HumanParser from "./HumanParser";
import { CitingMetaData } from "../components/types/CitingMetaData";

export default function GetAuthor(metadata: CitingMetaData) {
  let authorsInfo = metadata.authors;
  let authors = [];

  if (!authorsInfo) {
    let author = {
      type: "Organization",
      full: metadata.publisher,
    };
    authors.push(author);
  } 

  if (authorsInfo) {
    authorsInfo.forEach((info: string) => {
      let author = HumanParser(info);
      authors.push(author);
    });
  }

  return authors;
}
