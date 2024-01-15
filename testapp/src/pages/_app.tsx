import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <div className="container-fluid background">
        {router.pathname == `/loginPage` ? null : <Navbar />}
        <Component {...pageProps} />
      </div>
    </>
  );
}
