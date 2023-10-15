import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/server/db";

import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";


export const submitRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string(), opinion: z.string()}))
    .mutation(({ input }) => {
      const name = input.name
      const opinion = input.opinion

      return db.frogQuestion.create({
        data: {
          submittedBy: name,
          response: opinion
        }
      })
    })
});

export const formRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
      dateOfBirth: z.string()
    }))
    .mutation(({ input }) => {
      const dateOfBirth = input.dateOfBirth

      return db.formData.create({
        data: {
          dateOfBirth: dateOfBirth,
        }
      })
    })
})