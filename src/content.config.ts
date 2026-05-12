import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { generateBlogId } from './content/generateBlogId';
import { z } from 'astro/zod'

const blog = defineCollection({
	loader: glob({
		base: './src/content/blog',
		pattern: '**/*.md',
		generateId: ({ entry }) => generateBlogId(entry),
	}),
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		tags: z.array(z.string())
			.optional()
			.default([])
	}),
});

export const collections = { blog };
