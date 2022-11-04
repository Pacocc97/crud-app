import { type AppType } from "next/app";
import { trpc } from "../utils/trpc";
import "../styles/globals.css";
import { CartProvider } from "react-use-cart";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
};

export default trpc.withTRPC(MyApp);
