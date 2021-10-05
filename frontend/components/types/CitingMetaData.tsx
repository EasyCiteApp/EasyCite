import { CitingStyle } from "./CitingStyle";
import { CitingSource } from "./CitingSource";

export type CitingMetaData = {
  date: string | null;
  description: string | null;
  image: string | null;
  publisher: string | null;
  title: string | null;
  url: string | null;
  thumbnail: string | null;
  URL: string | null;
  authors: string[] | null;
  style: CitingStyle | null,
  type: CitingSource | null,
};
