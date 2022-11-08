import Link from "next/link";

import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";


function Index() {
  return (
    <div className="h-screen">
      <NavBar />
      <div>
        <Link href={"/home"}>
          <div className="m-40">
            <h1 className="text-5xl">Esta es la página de inicio muestra</h1>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default Index;
