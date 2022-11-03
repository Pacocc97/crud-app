import Link from "next/link";
import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const NavBar = () => {
  const { openCart, cartQuantity } = useShoppingCart();
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
      <li className="mr-6">
        <Link
          href="./ShoppingCart"
          className="text-blue-500 hover:text-blue-800"
        >
          Carrito
        </Link>
      </li>
      <li className="mr-6">
        <a className="cursor-not-allowed text-gray-400" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
};
