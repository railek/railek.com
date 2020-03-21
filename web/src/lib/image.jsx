import imageUrlBuilder from '@sanity/image-url';
import sanityConfig from '../../sanity.config';

const builder = imageUrlBuilder(sanityConfig.sanity);

export default function imageUrlFor(source) {
    return builder.image(source);
}
