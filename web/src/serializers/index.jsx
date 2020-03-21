import Image from './image';
import Block from './block';
import Link from './link';
import Code from './code';
import Spotify from './spotify';

const serializers = {
    types: {
        block: Block,
        bodyImage: Image,
        spotify: Spotify,
        code: Code,
    },
    marks: {
        link: Link,
    },
};

export default serializers;
