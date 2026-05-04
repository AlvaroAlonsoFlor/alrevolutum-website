import { describe, it, expect } from 'vitest';
import { generateBlogId } from './generateBlogId';

describe('generateBlogId', () => {
	const cases: Array<[string, string]> = [
		['gallows-corner/a-peasant-revolt-gallows-corner-report.md', 'a-peasant-revolt-gallows-corner-report'],
		['cairn/cairn-shadows-in-the-glistening-pine-001.md', 'cairn-shadows-in-the-glistening-pine-001'],
		['cairn/cairn-shadows-in-the-glistening-pine-002.md', 'cairn-shadows-in-the-glistening-pine-002'],
		['kinfire-delve/kinfire-delve-use-in-ttrpg.md', 'kinfire-delve-use-in-ttrpg'],
		['republic-of-dhar/republic-of-dhar-solo-game-session-001.md', 'republic-of-dhar-solo-game-session-001'],
		['republic-of-dhar/republic-of-dhar-solo-game-session-002.md', 'republic-of-dhar-solo-game-session-002'],
		['republic-of-dhar/republic-of-dhar-solo-game-session-003.md', 'republic-of-dhar-solo-game-session-003'],
		['republic-of-dhar/republic-of-dhar-solo-game-session-004.md', 'republic-of-dhar-solo-game-session-004'],
		['cairn/volcanos-soul-post-game-thoughts.md', 'volcanos-soul-post-game-thoughts'],
	];

	it.each(cases)('%s → %s', (entry, expected) => {
		expect(generateBlogId(entry)).toBe(expected);
	});

	it('handles files in nested subdirectories', () => {
		expect(generateBlogId('a/b/c/some-post.md')).toBe('some-post');
	});

	it('handles files with no directory', () => {
		expect(generateBlogId('some-post.md')).toBe('some-post');
	});

	it('handles .mdx extension', () => {
		expect(generateBlogId('cairn/some-post.mdx')).toBe('some-post');
	});
});
