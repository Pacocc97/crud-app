import { ProductoCompra } from "@prisma/client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { trpc } from "../utils/trpc";

interface VentanaAgregar {
  setVentanaAbierta: Dispatch<SetStateAction<boolean>>;
  setProductos: Dispatch<SetStateAction<ProductoCompra[]>>;
}

const VentanaAgregar: FC<VentanaAgregar> = ({
  setVentanaAbierta,
  setProductos,
}) => {
  const [nombreProducto, setNombreProducto] = useState<string>("");
  const [stockProducto, setStockProducto] = useState<string>("");
  const [descProducto, setDescProducto] = useState<string>("");
  const [precioProducto, setPrecioProducto] = useState<string>("");
  const { mutate: agregarProducto } =
    trpc.productos.agregarProducto.useMutation({
      onSuccess(productoCompra) {
        setProductos((prev) => [...prev, productoCompra]);
      },
    });

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        <h3 className="text-xl font-semibold">Añadir Producto</h3>
        <div>
          <h4>Nombre</h4>
          <input
            type="text"
            value={nombreProducto}
            onChange={(e) => setNombreProducto(e.target.value)}
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
          <h4>Precio</h4>
          <input
            type="text"
            value={precioProducto}
            onChange={(e) => setPrecioProducto(e.target.value)}
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
          <h4>Stock</h4>
          <input
            type="text"
            value={stockProducto}
            onChange={(e) => setStockProducto(e.target.value)}
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
          <h4>Descripción</h4>
          <textarea
            required
            value={descProducto}
            onChange={(e) => setDescProducto(e.target.value)}
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
          {nombreProducto == "" ||
          descProducto == "" ||
          precioProducto == "" ? (
            <button
              type="button"
              className="rounded-md  bg-gray-600 p-1 text-xs text-white transition"
              disabled
            >
              Llenar campos
            </button>
          ) : (
            <button
              onClick={() => {
                agregarProducto({
                  nombre: nombreProducto,
                  desc: descProducto,
                  price: precioProducto,
                  stock: stockProducto,
                });
                setVentanaAbierta(false);
              }}
              type="button"
              className="rounded-md bg-black p-1 text-xs text-white transition hover:bg-gray-600"
            >
              Añadir
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VentanaAgregar;
