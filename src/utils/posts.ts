import type { CollectionEntry } from 'astro:content';

export function sortByDate(posts: CollectionEntry<'blog'>[]): CollectionEntry<'blog'>[] {
	return [...posts].sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);
}
