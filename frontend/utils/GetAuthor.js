import HumanParser from "./HumanParser";

export default function GetAuthor(metadata) {
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
    authorsInfo.forEach((info) => {
      let author = HumanParser(info);
      authors.push(author);
    });
  }

  return authors;
}
