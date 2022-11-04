import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductoCompra } from "@prisma/client";
import { trpc } from "../utils/trpc";
import slugify from "react-slugify";
import { NavBar } from "../components/NavBar";
import Head from "next/head";
import VentanaAgregar from "../components/ventanaAgregar";
import VentanaEditar from "../components/ventanaEditar";
import { stringify } from "querystring";
import Link from "next/link";

const Producto = () => {
  const [productoEditado, setProductoEditado] = useState<ProductoCompra[]>([]);
  const [ventanaAbierta, setVentanaAbierta] = useState<boolean>(false);
  const [ventanaAbiertaEditar, setVentanaAbiertaEditar] =
    useState<boolean>(false);
  const [nuevoNombre, setNuevoNombre] = useState<string>("");
  const [nuevaDesc, setNuevaDesc] = useState<string>("");
  const [nuevoPrecio, setNuevoPrecio] = useState<string>("");
  const [idProducto, setIdProducto] = useState<string>("");
  const [nuevoStock, setNuevoStock] = useState<string>("");
  ////////////////////////////////////////////////////////////
  const { asPath } = useRouter();
  const [productos, setProductos] = useState<ProductoCompra[]>([]);
  const [carrito, setCarrito] = useState(0);
  const data = trpc.productos.verProductos.useQuery([], {
    onSuccess(productos) {
      setProductos(productos);
    },
  });
  const producto = productos.map(
    (producto) => `/${slugify(producto.id)}` == asPath
  );
  const lugar = producto.indexOf(true);

  const { mutate: borrarProducto } = trpc.productos.borrarProducto.useMutation({
    onSuccess(productoCompra) {
      setProductos((prev) =>
        prev.filter((producto) => producto.id !== productoCompra.id)
      );
    },
  });

  const muestra = productos[lugar];
  const precioMuestra = Number(muestra?.price).toFixed(2);
  console.log(muestra, "este es el producto");

  return (
    <>
      <Head>
        <title>CRUD APP</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {ventanaAbiertaEditar && (
        <VentanaEditar
          nuevoStock={nuevoStock}
          nuevoPrecio={nuevoPrecio}
          idProducto={idProducto}
          nuevoNombre={nuevoNombre}
          nuevaDesc={nuevaDesc}
          setProductoEditado={setProductoEditado}
          setVentanaAbiertaEditar={setVentanaAbiertaEditar}
        />
      )}
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
              <button
                onClick={() => {
                  setIdProducto(muestra.id);
                  setNuevaDesc(muestra.desc);
                  setNuevoNombre(muestra.nombre);
                  setNuevoPrecio(muestra.price);
                  setVentanaAbiertaEditar(true);
                  setNuevoStock(muestra.stock);
                }}
              >
                <span className="mr-2 mb-2 inline-block rounded-full bg-black px-3 py-1 text-sm font-semibold text-white hover:bg-slate-700 ">
                  Editar
                </span>
              </button>
              <Link href="/home">
                <button onClick={() => borrarProducto({ id: muestra.id })}>
                  <span className="mr-2 mb-2 inline-block rounded-full bg-red-600  px-3 py-1 text-sm font-semibold text-white hover:bg-red-500">
                    Eliminar
                  </span>
                </button>
              </Link>
              <Link href="/home">
                <button>
                  <span className="mr-2 mb-2 inline-block rounded-full bg-black px-3 py-1 text-sm font-semibold text-white hover:bg-slate-700 ">
                    Regresar a producto{" "}
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      }
      <div></div>
    </>
  );
};

export default Producto;
