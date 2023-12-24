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
        mascOrFem: z.string(),
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
      const mascOrFem = input.mascOrFem;
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
          mascOrFem,
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

export const mainRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        dateOfBirth: z.string(),
        country: z.string(),
        genderEntry: z.string(),
        genderOther: z.string(),
        raceEntry: z.string(),
        raceOther: z.string(),
        hrtType: z.string(),
        mascEffectsEntry: z.string(),
        mascEffectsOther: z.string(),
        mascEffectsSexComfortable: z.string(), //this might be a bool
        mascEffectsSexEntry: z.string(),
        mascEffectsSexOther: z.string(),

        femEffectsEntry: z.string(),
        femEffectsOther: z.string(),
        femEffectsCyclicEntry: z.string(),
        femEffectsCyclicOther: z.string(),
        femEffectsSexComfortable: z.string(), //this also might be a bool
        femEffectsSexEntry: z.string(),
        femEffectsSexOther: z.string(),

        otherMedications: z.string(),
        otherConditions: z.string(),
        additions: z.string(),
        experience: z.string(),
        feedback: z.string(),
      }),
    )
    .mutation(({ input }) => {
      const dateOfBirth = input.dateOfBirth;
      const country = input.country;
      const genderEntry = input.genderEntry;
      const genderOther = input.genderOther;
      const raceEntry = input.raceEntry;
      const raceOther = input.raceOther;
      const hrtType = input.hrtType;
      const mascEffectsEntry = input.mascEffectsEntry;
      const mascEffectsOther = input.mascEffectsOther;
      const mascEffectsSexComfortable = input.mascEffectsSexComfortable;
      const mascEffectsSexEntry = input.mascEffectsSexEntry;
      const mascEffectsSexOther = input.mascEffectsSexOther;
      const femEffectsEntry = input.femEffectsEntry;
      const femEffectsOther = input.femEffectsOther;
      const femEffectsCyclicEntry = input.femEffectsCyclicEntry;
      const femEffectsCyclicOther = input.femEffectsCyclicOther;
      const femEffectsSexComfortable = input.femEffectsSexComfortable;
      const femEffectsSexEntry = input.femEffectsSexEntry;
      const femEffectsSexOther = input.femEffectsSexOther;
      const otherMedications = input.otherMedications;
      const otherConditions = input.otherConditions;
      const additions = input.additions;
      const experience = input.experience;
      const feedback = input.feedback;

      return db.mainForm.create({
        data: {
          dateOfBirth,
          country,
          genderEntry,
          genderOther,
          raceEntry,
          raceOther,
          hrtType,
          mascEffectsEntry,
          mascEffectsOther,
          mascEffectsSexComfortable,
          mascEffectsSexEntry,
          mascEffectsSexOther,
          femEffectsEntry,
          femEffectsOther,
          femEffectsCyclicEntry,
          femEffectsCyclicOther,
          femEffectsSexComfortable,
          femEffectsSexEntry,
          femEffectsSexOther,
          otherMedications,
          otherConditions,
          additions,
          experience,
          feedback,
        },
      });
    }),
});
