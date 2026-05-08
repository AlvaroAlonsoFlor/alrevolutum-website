import { describe, it, expect } from 'vitest';
import { generateBlogId } from './generateBlogId';

describe('generateBlogId', () => {
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
