import { mainRouter } from "~/server/api/routers/mainSubmission";
import { medicationRouter } from "./routers/medicationSubmission";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  main: mainRouter,
  medication: medicationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
