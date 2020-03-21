export default {
    title: 'Hero',
    name: 'hero',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'portableText',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare() {
            return {
                title: 'Hero',
            };
        },
    },
};
