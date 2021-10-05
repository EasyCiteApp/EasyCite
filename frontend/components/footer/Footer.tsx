import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2"> Manual Citation Guideline </span>
          <Image src="/vercel.svg" height={14} width={60} alt="Vercel Logo" />
        </a>
      </footer>
    </>
  );
};

export default Footer;
