import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { ShoppingCartProvider } from "../context/ShoppingCartContext";


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <ShoppingCartProvider>
        <Component {...pageProps} />
      </ShoppingCartProvider>
    </>
  );
};

export default trpc.withTRPC(MyApp);
