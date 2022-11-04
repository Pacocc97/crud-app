import Link from "next/link";
import React from "react";

export const NavBar = () => {
  return (
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
  );
};
