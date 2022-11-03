import { ProductoCompra } from "@prisma/client";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { trpc } from "../utils/trpc";

type CartItemProps = {
  id: number;
  quantity: number;
};

export const CartItem = ({ id, quantity }) => {
    const [productos, setProductos] = useState<ProductoCompra[]>([]);
     const data = trpc.productos.verProductos.useQuery([], {
       onSuccess(productos) {
         setProductos(productos);
       },
     });

  const { removeFromCart } = useShoppingCart();
  const item = productos.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <div>

      <div className="me-auto">
        <div>
          {item.nombre}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          2 pesos
        </div>
      </div>
      <div>2 pesos</div>
      <div
   
        //onClick={() => removeFromCart(item.id)}
      >
        &times;
      </div>
    </div>
  );
};
