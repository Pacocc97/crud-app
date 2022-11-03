import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>CRUD APP</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto my-12 max-w-3xl">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">Lista de productos</h2>
          <button
            className="rounded-md bg-black p-2 text-sm text-white transition hover:bg-gray-600"
          >
            Añadir producto
          </button>
        </div>
      </main>
    </>
  );
};

export default Home;
