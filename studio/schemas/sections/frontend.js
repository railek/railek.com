export default {
    title: 'Frontend',
    name: 'frontend',
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
