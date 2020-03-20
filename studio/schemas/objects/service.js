import { MdLock } from 'react-icons/md';

export default {
    name: 'service',
    title: 'Service',
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
            type: 'portableText',
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
