import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import imageUrlFor from '../lib/image';

const query = graphql`
    query SEOQuery {
        metadata: sanityMetadata(_id: { regex: "/(drafts.|)metadata/" }) {
            title
            description
            keywords
            twitter
            image {
                asset {
                    _id
                }
            }
        }
    }
`;

export default function SEO({ title, description, type, lang, image }) {
    const { metadata } = useStaticQuery(query);

    return (
        <Helmet
            title={title}
            htmlAttributes={{ lang }}
            titleTemplate={`${metadata.title} | %s`}
            defer={false}
        >
            <meta name="description" content={metadata.description} />
            <meta name="keywords" content={metadata.keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={description || metadata.description}
                key="ogdesc"
            />
            <meta property="og:type" content={type || 'website'} key="ogtype" />
            <meta
                property="og:image"
                content={
                    imageUrlFor(image).width(1200).url() ||
                    imageUrlFor(metadata.image).width(1200).url()
                }
                key="ogimage"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || metadata.description} />
            <meta name="twitter:creator" content={metadata.twitter} />
            <meta
                name="twitter:image"
                content={
                    imageUrlFor(image).width(300).url() ||
                    imageUrlFor(metadata.image).width(300).url()
                }
            />
        </Helmet>
    );
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.object,
    lang: PropTypes.string,
};

SEO.defaultProps = {
    title: null,
    description: null,
    type: null,
    image: null,
    lang: 'en',
};
