import { describe, it, expect } from 'vitest';
import { getAllTags, tagToPath } from './tags';
import type { CollectionEntry } from 'astro:content';

type BlogPost = CollectionEntry<'blog'>;

function makePost(id: string, tags: string[]): BlogPost {
	return { id, data: { tags } } as unknown as BlogPost;
}

describe('tagToPath', () => {
	it('returns /tags/<tag> for a simple tag', () => {
		expect(tagToPath('rpg')).toBe('/tags/rpg');
	});

	it('preserves slashes in hierarchical tags', () => {
		expect(tagToPath('rpg/solo')).toBe('/tags/rpg/solo');
	});

	it('handles an empty string', () => {
		expect(tagToPath('')).toBe('/tags/');
	});
});

describe('getAllTags', () => {
	it('returns an empty map when no posts are provided', () => {
		expect(getAllTags([])).toEqual(new Map());
	});

	it('returns an empty map when posts have no tags', () => {
		const posts = [makePost('a', []), makePost('b', [])];
		expect(getAllTags(posts)).toEqual(new Map());
	});

	it('groups posts by their tags', () => {
		const a = makePost('a', ['rpg']);
		const b = makePost('b', ['rpg']);
		const c = makePost('c', ['gaming']);
		const map = getAllTags([a, b, c]);

		expect(map.get('rpg')).toEqual([a, b]);
		expect(map.get('gaming')).toEqual([c]);
		expect(map.size).toBe(2);
	});

	it('expands hierarchical tags into their ancestors', () => {
		const post = makePost('a', ['rpg/solo']);
		const map = getAllTags([post]);

		expect(map.get('rpg')).toEqual([post]);
		expect(map.get('rpg/solo')).toEqual([post]);
		expect(map.size).toBe(2);
	});

	it('expands deeply nested tags into every ancestor', () => {
		const post = makePost('a', ['a/b/c/d']);
		const map = getAllTags([post]);

		expect(Array.from(map.keys()).sort()).toEqual(['a', 'a/b', 'a/b/c', 'a/b/c/d']);
		for (const key of map.keys()) {
			expect(map.get(key)).toEqual([post]);
		}
	});

	it('does not duplicate a post when a tag and its ancestor are both present', () => {
		const post = makePost('a', ['rpg', 'rpg/solo']);
		const map = getAllTags([post]);

		expect(map.get('rpg')).toEqual([post]);
		expect(map.get('rpg/solo')).toEqual([post]);
		expect(map.get('rpg')!.length).toBe(1);
	});

	it('does not duplicate a post that lists the same tag twice', () => {
		const post = makePost('a', ['rpg', 'rpg']);
		const map = getAllTags([post]);

		expect(map.get('rpg')).toEqual([post]);
		expect(map.get('rpg')!.length).toBe(1);
	});

	it('groups posts with overlapping hierarchies under shared ancestors', () => {
		const a = makePost('a', ['rpg/solo']);
		const b = makePost('b', ['rpg/group']);
		const map = getAllTags([a, b]);

		expect(map.get('rpg')).toEqual([a, b]);
		expect(map.get('rpg/solo')).toEqual([a]);
		expect(map.get('rpg/group')).toEqual([b]);
	});

	it('preserves the order in which posts are passed in', () => {
		const a = makePost('a', ['rpg']);
		const b = makePost('b', ['rpg']);
		const c = makePost('c', ['rpg']);
		const map = getAllTags([c, a, b]);

		expect(map.get('rpg')).toEqual([c, a, b]);
	});
});
