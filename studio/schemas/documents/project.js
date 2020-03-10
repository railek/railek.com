import { MdStar } from 'react-icons/md';

export default {
    title: 'Project',
    name: 'project',
    type: 'document',
    icon: MdStar,
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        },
        {
            title: 'Description',
            name: 'description',
            type: 'portableText',
        },
        {
            title: 'URL',
            name: 'url',
            type: 'url',
        },
        {
            title: 'Tech',
            name: 'tech',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
            validation: (Rule) => Rule.unique(),
        },
    ],

    preview: {
        select: {
            title: 'title',
        },
    },
};
