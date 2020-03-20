export default {
    title: 'Services',
    name: 'services',
    type: 'document',
    fields: [
        {
            name: 'list',
            type: 'array',
            title: 'List',
            of: [
                {
                    type: 'service',
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'list',
        },
        prepare() {
            return {
                title: 'Services',
            };
        },
    },
};
