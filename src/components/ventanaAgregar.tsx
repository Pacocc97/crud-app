import { Dispatch, FC, SetStateAction, useState } from "react";

interface VentanaAgregar {
  setVentanaAbierta: Dispatch<SetStateAction<boolean>>;
}

const VentanaAgregar: FC<VentanaAgregar> = ({ setVentanaAbierta }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        <h3 className="text-xl font-semibold">Añadir Producto</h3>
        <div>
          <h4>Nombre</h4>
          <input
            type="text"
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
          <h4>Descripción</h4>
          <input
            type="text"
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <button
            onClick={() => setVentanaAbierta(false)}
            type="button"
            className="rounded-md bg-gray-500 p-1 text-xs text-white transition hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            type="button"
            className="rounded-md bg-violet-500 p-1 text-xs text-white transition hover:bg-violet-600"
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
};

export default VentanaAgregar;
