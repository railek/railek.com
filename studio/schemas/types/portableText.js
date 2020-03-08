export default {
    title: 'Portable Text',
    name: 'portableText',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            marks: {
                decorators: [
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Underline', value: 'underline' },
                    { title: 'Strike', value: 'strike-through' },
                ],
                annotations: [
                    {
                        name: 'link',
                        type: 'object',
                        title: 'External link',
                        fields: [
                            {
                                name: 'href',
                                type: 'url',
                                title: 'URL',
                            },
                            {
                                title: 'Open in new tab',
                                name: 'blank',
                                type: 'boolean',
                            },
                        ],
                    },
                ],
            },
        },
        {
            type: 'bodyImage',
        },
        {
            type: 'code',
        },
        {
            type: 'spotify',
        },
    ],
};
