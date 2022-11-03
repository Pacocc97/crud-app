import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//ctx investigar

export const productoRouter = router({
  agregarProducto: publicProcedure
    .input(z.object({ nombre: z.string(), desc: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const productos = await ctx.prisma.productoCompra.create({
        data: {
          nombre: input.nombre,
          desc: input.desc,
        },
      });
      return productos;
    }),

  verProductos: publicProcedure.query(async ({ ctx }) => {
    const productos = await ctx.prisma.productoCompra.findMany();
    return productos;
  }),
  // .input(z.object({ id: z.string() }))
  // .mutation(async ({ ctx, input }) => {
  //   const producto = await ctx.prisma.productoCompra.delete({
  //     where: {
  //       id: input.id,
  //     },
  //   });
  //   return producto;
  // }),
});
