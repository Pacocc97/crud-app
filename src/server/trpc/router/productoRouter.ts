import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//ctx investigar

export const productoRouter = router({
  agregarProducto: publicProcedure
    .input(
      z.object({
        nombre: z.string(),
        desc: z.string(),
        precio: z.string(),
        stock: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const productos = await ctx.prisma.productoCompra.create({
        data: {
          nombre: input.nombre,
          desc: input.desc,
          precio: input.precio,
          stock: input.stock,
        },
      });
      return productos;
    }),

  verProductos: publicProcedure.query(async ({ ctx }) => {
    const productos = await ctx.prisma.productoCompra.findMany();
    return productos;
  }),
  borrarProducto: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const producto = await ctx.prisma.productoCompra.delete({
        where: {
          id: input.id,
        },
      });
      return producto;
    }),

  editarProducto: publicProcedure
    .input(
      z.object({
        id: z.string(),
        nombre: z.string(),
        desc: z.string(),
        precio: z.string(),
        stock: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const productos = await ctx.prisma.productoCompra.update({
        where: {
          id: input.id,
        },
        data: {
          nombre: input.nombre,
          desc: input.desc,
          precio: input.precio,
          stock: input.stock,
        },
      });
      return productos;
    }),
});
