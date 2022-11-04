import Link from "next/link";
import React, { useState } from "react";
import { trpc } from "../utils/trpc";

export const NavBar = () => {
  const [productos, setProductos] = useState<ProductoCompra[]>([]);
  trpc.productos.verProductos.useQuery([], {
    onSuccess(productos) {
      setProductos(productos);
    },
  });
  
  console.log(productos, "aquí está navbar");

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
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
