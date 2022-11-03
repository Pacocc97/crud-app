import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { BrowserRouter } from "react-router-dom";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <BrowserRouter>
        <Component {...pageProps} />
      </BrowserRouter>
    </>
  );
};

export default trpc.withTRPC(MyApp);
