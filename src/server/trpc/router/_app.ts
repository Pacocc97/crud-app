import { router } from "../trpc";
import { exampleRouter } from "./example";
import { productoRouter } from "./productoRouter";

export const appRouter = router({
  example: exampleRouter,
  productos: productoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
