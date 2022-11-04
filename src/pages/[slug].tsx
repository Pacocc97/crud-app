import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductoCompra } from "@prisma/client";
import { trpc } from "../utils/trpc";
import slugify from "react-slugify";
import { NavBar } from "../components/NavBar";

const Producto = () => {
  const { asPath } = useRouter();
  const [productos, setProductos] = useState<ProductoCompra[]>([]);
  const data = trpc.productos.verProductos.useQuery([], {
    onSuccess(productos) {
      setProductos(productos);
    },
  });
  const producto = productos.map(
    (producto) => `/${slugify(producto.nombre)}` == asPath
  );
  const lugar = producto.indexOf(true);

  const muestra = productos[lugar];
  const precioMuestra = Number(muestra?.precio).toFixed(2);
  console.log(precioMuestra, "este es el producto");

  useEffect(() => {
    localStorage.setItem(asPath, JSON.stringify(muestra));
  }, [muestra]);

  return (
    <>
      <NavBar />
      {
        <div>
          <h1 className="text-xs">id:{muestra?.id}</h1>
          <div className="max-w-sm overflow-hidden rounded shadow-lg">
            <div className="px-4 py-2">
              <span className="font-thin">Nombre: </span>
              <div className="mb-2 text-xl font-bold">{muestra?.nombre}</div>
              <h1>Precio: ${precioMuestra}</h1>
              <h1>Disponibles: {muestra?.stock}</h1>
              <h3 className="font-thin">Descripción: </h3>
              <p className="text-base text-gray-700">{muestra?.desc}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button className="w-100 bg-black text-white">
                + Add To Cart
              </button>
              <button>
                <span className="mr-2 mb-2 inline-block rounded-full bg-black px-3 py-1 text-sm font-semibold text-white hover:bg-slate-700 ">
                  Editar
                </span>
              </button>
              <span className="mr-2 mb-2 inline-block rounded-full bg-red-600  px-3 py-1 text-sm font-semibold text-white hover:bg-red-500">
                <button>Eliminar</button>
              </span>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Producto;
