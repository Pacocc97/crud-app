import Link from "next/link";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "../components/NavBar";
import Home from "./home";

function Index() {
  return (
    <>
      <NavBar />
      <div className="mb-4">
        <Link href={"/home"}>Hola</Link>
      </div>
    </>
  );
}

export default Index;
