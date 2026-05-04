export function generateBlogId(entry: string): string {
	return entry.split('/').pop()!.replace(/\.mdx?$/, '');
}
