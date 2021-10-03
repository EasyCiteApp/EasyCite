import axios from "axios";

const instance = axios.create({
  baseURL: process.env.baseApiUrl,
});

export default instance;
