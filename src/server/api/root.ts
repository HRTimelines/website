import { formRouter, submitRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  submit: submitRouter,
  form: formRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
