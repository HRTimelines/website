import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { db } from "~/server/db";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const medicationRouter = createTRPCRouter({
    create: publicProcedure
      .input(
        z.object({
          submitterId: z.number(),
          row: z.number(),
          method: z.string(),
          medication: z.string(),
          amount: z.string(),
          frequency: z.string(),
          start: z.string(),
          end: z.string(),
          ongoing: z.string(),
          termination: z.string(),
        }),
      )
      .mutation(({ input }) => {
        const submitterId = input.submitterId;
        const row = input.row;
        const method = input.method;
        const medication = input.medication;
        const amount = input.amount;
        const frequency = input.frequency;
        const start = input.start;
        const end = input.end;
        const ongoing = input.ongoing;
        const termination = input.termination;
  
        return db.medicationData.create({
          data: {
            submitterId,
            row,
            method,
            medication,
            amount,
            frequency,
            start,
            end,
            ongoing,
            termination,
          },
        });
      }),
  });
  