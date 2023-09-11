import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
	name: 'Post',
	filePathPattern: `posts/**/*.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
		tags: { type: 'list', of: { type: 'string' } },
		lastmod: { type: 'date' },
		draft: { type: 'boolean' },
		summary: { type: 'string' },
		images: { type: 'list', of: { type: 'string' } },
		authors: { type: 'list', of: { type: 'string' } },
		layout: { type: 'string' },
		bibliography: { type: 'string' },
		canonicalUrl: { type: 'string' },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `/${post._raw.flattenedPath}`,
		},
	},
}));

export const About = defineDocumentType(() => ({
	name: 'About',
	filePathPattern: `about.mdx`,
	contentType: 'mdx',
	fields: {
		title: {
			type: 'string',
			description: 'The title of the post',
			required: true,
		},
		date: {
			type: 'date',
			description: 'The date of the post',
			required: true,
		},
		tags: { type: 'list', of: { type: 'string' } },
		lastmod: { type: 'date' },
		draft: { type: 'boolean' },
		summary: { type: 'string' },
		images: { type: 'list', of: { type: 'string' } },
		authors: { type: 'list', of: { type: 'string' } },
		layout: { type: 'string' },
		bibliography: { type: 'string' },
		canonicalUrl: { type: 'string' },
	},
	computedFields: {
		url: {
			type: 'string',
			resolve: (post) => `${post._raw.flattenedPath}`,
		},
	},
}));

export default makeSource({
	contentDirPath: 'contents',
	documentTypes: [Post, About],
	date: {
		timezone: 'Asia/Jakarta',
	},
});
