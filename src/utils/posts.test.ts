import { describe, it, expect } from 'vitest';
import { sortByDate } from './posts';
import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

function makePost(id: string, pubDate: Date): BlogPost {
	return { id, data: { pubDate } } as unknown as BlogPost;
}

describe('sortByDate', () => {

	it('orders posts from newest to oldest by pubDate', () => {
		const older = makePost('older', new Date('2024-01-01'));
		const newer = makePost('newer', new Date('2025-01-01'));
		const newest = makePost('newest', new Date('2026-01-01'));

		expect(sortByDate([older, newest, newer])).toEqual([newest, newer, older]);
	});

	it('does not mutate the input array', () => {
		const a = makePost('a', new Date('2024-01-01'));
		const b = makePost('b', new Date('2025-01-01'));
		const input = [a, b];

		sortByDate(input);

		expect(input).toEqual([a, b]);
	});
});
