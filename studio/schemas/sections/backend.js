export default {
    title: 'Backend',
    name: 'backend',
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
