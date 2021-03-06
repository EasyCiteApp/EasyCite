import "tailwindcss/tailwind.css";
import "./index.css";
import Layout from "../components/layout/Layout";
import { AppProps } from 'next/app';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnHover
      />
    </Layout>
  );
}

export default MyApp;
