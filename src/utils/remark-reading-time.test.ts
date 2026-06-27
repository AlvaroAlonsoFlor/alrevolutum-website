import { describe, it, expect } from 'vitest';
import { remarkReadingTime } from './remark-reading-time';

describe('remarkReadingTime', () => {
	it('should set minutesRead on astro frontmatter', () => {
		const tree = {
			type: 'root',
			children: [
				{ type: 'paragraph', children: [{ type: 'text', value: 'word '.repeat(400) }] },
			],
		};
		const file = { data: { astro: { frontmatter: {} } } };

		remarkReadingTime()(tree, file);

		expect(file.data.astro.frontmatter.minutesRead).toMatch(/\d+ min read/);
	});
});
