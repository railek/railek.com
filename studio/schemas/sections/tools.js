export default {
    title: 'Tools',
    name: 'tools',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'list',
            type: 'array',
            title: 'List',
            of: [
                {
                    type: 'listItem',
                },
            ],
        },
    ],
};
