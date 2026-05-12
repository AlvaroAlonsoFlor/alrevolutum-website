import type { CollectionEntry } from 'astro:content';

function tagAncestors(tag: string): string[] {
	const parts = tag.split('/');
	return parts.map((_, i) => parts.slice(0, i + 1).join('/'));
}

export function getAllTags(posts: CollectionEntry<'blog'>[]): Map<string, CollectionEntry<'blog'>[]> {
	const tagMap = new Map<string, CollectionEntry<'blog'>[]>();
	for (const post of posts) {
		const expanded = new Set(post.data.tags.flatMap(tagAncestors));
		for (const tag of expanded) {
			if (!tagMap.has(tag)) tagMap.set(tag, []);
			tagMap.get(tag)!.push(post);
		}
	}
	return tagMap;
}

export function tagToPath(tag: string): string {
	return `/tags/${tag}`;
}
