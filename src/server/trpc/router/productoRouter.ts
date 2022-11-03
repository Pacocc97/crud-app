import { router, publicProcedure } from "../trpc";
import { z } from "zod";
//ctx investigar

export const productoRouter = router({
  agregarProducto: publicProcedure
    .input(z.object({ nombre: z.string(), desc: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const items = await ctx.prisma.productoCompra.create({
        data: {
          nombre: input.nombre,
          desc: input.nombre,
        },
      });
      return items;
    }),
});
