import { useRouter } from "next/router";
import React from "react";

const Producto = () => {
  const { asPath } = useRouter();
  return (
    <div>
      <h1 className="text-xs">id:</h1>
      <div className="max-w-sm overflow-hidden rounded shadow-lg">
        <div className="px-4 py-2">
          <span className="font-thin">Nombre:</span>
          <div className="mb-2 text-xl font-bold">nombre</div>
          <h1>$precio</h1>
          <h1>Disponibles: stock</h1>
          <h3 className="font-thin">Descripción: {asPath}</h3>
          <p className="text-base text-gray-700">desc</p>
        </div>
        <div className="px-6 pt-4 pb-2">
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
  );
};

export default Producto;
