import { MdLock } from 'react-icons/md';

export default {
    name: 'listItem',
    title: 'List Item',
    type: 'object',
    icon: MdLock,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url',
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'icon',
        },
    },
};
