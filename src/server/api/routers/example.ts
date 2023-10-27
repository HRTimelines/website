import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/server/db";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const submitRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({ name: z.string(), opinion: z.string() }))
    .mutation(({ input }) => {
      const name = input.name;
      const opinion = input.opinion;

      return db.frogQuestion.create({
        data: {
          submittedBy: name,
          response: opinion,
        },
      });
    }),
});

export const formRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        dateOfBirth: z.string(),
        country: z.string(),
        transStart: z.string(),
        transEnd: z.string(),
        comingOutStart: z.string(),
        comingOutEnd: z.string(),
        hrtStart: z.string(),
        notes: z.string(),
        feedback: z.string(),
        future: z.string(),
      }),
    )
    .mutation(({ input }) => {
      const dateOfBirth = input.dateOfBirth;
      const country = input.country;
      const transStart = input.transStart;
      const transEnd = input.transEnd;
      const comingOutStart = input.comingOutStart;
      const comingOutEnd = input.comingOutEnd;
      const hrtStart = input.hrtStart;
      const notes = input.notes;
      const feedback = input.feedback;
      const future = input.future;

      return db.formData.create({
        data: {
          dateOfBirth,
          country,
          transStart,
          transEnd,
          comingOutStart,
          comingOutEnd,
          hrtStart,
          notes,
          feedback,
          future,
        },
      });
    }),
});
