import { MdQuestionAnswer } from 'react-icons/md';

export default {
    name: 'faq',
    title: 'FAQ',
    type: 'object',
    icon: MdQuestionAnswer,
    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'portableText',
        },
    ],
    preview: {
        select: {
            title: 'question',
        },
    },
};
