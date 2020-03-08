import { MdDonutSmall } from 'react-icons/md';

export default {
    title: 'Category',
    name: 'category',
    type: 'document',
    icon: MdDonutSmall,
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
    ],
};
