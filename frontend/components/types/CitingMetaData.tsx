import { CitingStyle } from "./CitingStyle";
import { CitingSource } from "./CitingSource";

export type CitingMetaData = {
  date: string;
  description: string;
  image: string;
  publisher: string;
  title: string;
  url: string;
  thumbnail: string;
  URL: string;
  authors: string[] | null;
  style: CitingStyle | null,
  type: CitingSource | null,
};
