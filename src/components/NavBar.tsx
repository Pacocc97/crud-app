import Link from "next/link";
import React, { useState } from "react";

const navData = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Productos",
    href: "/home",
  },
  /*{
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },*/
];

export const NavBar = () => {
  return (
    <div className=" container mx-auto flex w-full items-center justify-between bg-black px-5 py-6 text-2xl font-bold  text-white">
      <Link href="/home">
        <h1 className="flex h-[3.5rem] items-center text-center">Inicio</h1>
      </Link>
      <nav className=" space-x-10 md:flex">
        {navData.map((n) => {
          return (
            <Link key={n.name} href={n.href}>
              {n.name}
            </Link>
          );
        })}
      </nav>
      <div className="md:hidden">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="white"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

/*

<ul className="flex">
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" href="/">
      Home
    </Link>
  </li>
  <li className="mr-6">
    <Link className="text-blue-500 hover:text-blue-800" href="./home">
      Productos
    </Link>
  </li>
</ul>
*/
