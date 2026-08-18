import { defineCollection, z } from 'astro:content';

// Personal essays, stories, culture pieces, and book reviews.
// Every field here maps directly to what the archive, filters, search,
// and featured-writing homepage section all read from.
const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    category: z.enum(['Essays', 'Culture & Brands', 'Stories', 'Books']),
    platform: z.enum(['Medium', 'Substack']),
    readingTime: z.string(),
    originalUrl: z.string().url(),
    coverImage: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

// Professional / commercial writing. Light by design — just enough to
// link out honestly, no invented case-study metrics.
const work = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    url: z.string().url(),
  }),
});

export const collections = { writing, work };
