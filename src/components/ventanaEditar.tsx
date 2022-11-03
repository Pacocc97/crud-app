import { ProductoCompra } from "@prisma/client";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { productoRouter } from "../server/trpc/router/productoRouter";
import { trpc } from "../utils/trpc";

interface VentanaEditar {
  setVentanaAbiertaEditar: Dispatch<SetStateAction<boolean>>;
  setProductoEditado: Dispatch<SetStateAction<ProductoCompra[]>>;
  nuevaDesc: string;
  nuevoNombre: string;
  idProducto: string;
}

const VentanaEditar: FC<VentanaEditar> = ({
  idProducto,
  nuevaDesc,
  nuevoNombre,
  setVentanaAbiertaEditar,
  setProductoEditado,
}) => {
  const [nuevoNombreProducto, setNuevoNombreProducto] =
    useState<string>(nuevoNombre);
  const [nuevaDescProducto, setNuevaDescProducto] = useState<string>(nuevaDesc);
  const [errorCampo, setErrorCampo] = useState<boolean>(false);
  const { mutate: editarProducto } = trpc.productos.editarProducto.useMutation(
    {}
  );

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black/75">
      <div className="space-y-4 bg-white p-3">
        {errorCampo === false ? (
          <h3 className="text-xl font-semibold">Editar Producto</h3>
        ) : (
          <>
            <h3 className="text-xl font-semibold">Editar Producto</h3>
            <h4>Favor de llenar los campos</h4>
          </>
        )}
        <div>
          <h4>Nombre</h4>
          <input
            required
            type="text"
            value={nuevoNombreProducto}
            onChange={(e) => setNuevoNombreProducto(e.target.value)}
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
          <h4>Descripción</h4>
          <textarea
            value={nuevaDescProducto}
            onChange={(e) => setNuevaDescProducto(e.target.value)}
            className="w-full rounded-md border-gray-300 bg-gray-200 shadow-sm focus:border-violet-300 focus:ring focus:ring-violet-200 focus:ring-opacity-50"
          />
        </div>
        <div className="grid grid-cols-2 gap-8">
          <button
            onClick={() => setVentanaAbiertaEditar(false)}
            type="button"
            className="rounded-md bg-gray-500 p-1 text-xs text-white transition hover:bg-gray-600"
          >
            Cancelar
          </button>
          <button
            onClick={
              nuevoNombreProducto === "" || nuevaDescProducto === ""
                ? setErrorCampo(true)
                : 
                () => {
                    editarProducto({
                      nombre: nuevoNombreProducto,
                      desc: nuevaDescProducto,
                      id: idProducto,
                    });

                    setVentanaAbiertaEditar(false);
                    window.location.reload();
                  }
            }
            type="button"
            className="rounded-md bg-black p-1 text-xs text-white transition hover:bg-gray-600"
          >
            Editar
          </button>
        </div>
      </div>
    </div>
  );
};

export default VentanaEditar;
