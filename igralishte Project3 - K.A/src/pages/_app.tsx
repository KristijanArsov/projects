import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLandingPage = router.pathname === "/";
  const isLogonPage = router.pathname.startsWith(`/logOn`);
  return (
    <>
      {router.pathname.startsWith(`/registerOne`) ||
      router.pathname == `/order/orderForm` || router.pathname.startsWith(`/login`) ? null : (
        <Navbar />
      )}

      <div
        className={`container-fluid ${isLandingPage ? "bgColor": isLogonPage ? "bgLogOnColor" : ""}`}
        style={{ paddingTop: `${router.pathname == `/order/orderForm`? `50px`: `96px`}`, paddingBottom: `20px` }}
      >
        <Component {...pageProps} />
        {router.pathname.startsWith(`/registerOne`) ||
        router.pathname.startsWith(`/orderForm`) || router.pathname.startsWith(`/search`) || router.pathname.startsWith(`/login`) || router.pathname == `/order/orderForm` ? null : (
          <Footer />
        )}
      </div>
    </>
  );
}
