import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    badge: z.string().optional(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('📁'),
    githubUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('📝'),
  }),
});

const utils = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).default([]),
    icon: z.string().default('📟'),
  }),
});

const jobSchema = z.object({
  role: z.string(),
  company: z.string(),
  period: z.string(),
  description: z.string(),
  order: z.number().default(1),
});

const experience = defineCollection({
  type: 'data',
  schema: z.union([jobSchema, z.array(jobSchema)]),
});

const skills = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    items: z.array(z.string()),
    order: z.number().default(1),
  }),
});

export const collections = {
  projects,
  blog,
  utils,
  experience,
  skills,
};
