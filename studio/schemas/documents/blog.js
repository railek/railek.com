import { MdChromeReaderMode } from 'react-icons/md';

export default {
    title: 'Blog',
    name: 'blog',
    type: 'document',
    icon: MdChromeReaderMode,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text',
        },
        {
            title: 'Keywords',
            description: 'SEO Keyword Meta',
            name: 'keywords',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
                sortable: false,
            },
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: { type: 'category' },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Content',
            name: 'content',
            type: 'portableText',
        },
        {
            title: 'FAQs',
            name: 'faqs',
            type: 'array',
            of: [{ type: 'faq' }],
        },
    ],

    preview: {
        select: {
            title: 'title',
            media: 'image',
        },
    },
};
