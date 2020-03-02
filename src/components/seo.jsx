import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import imageUrlFor from '../lib/image';

const query = graphql`
    query SEOQuery {
        site: sanityMetadata(_id: { regex: "/(drafts.|)metadata/" }) {
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
    const { site } = useStaticQuery(query);

    return (
        <Helmet
            title={title}
            htmlAttributes={{ lang }}
            titleTemplate={`${site.title} | %s`}
            defer={false}
        >
            <meta name="description" content={site.description} />
            <meta name="keywords" content={site.keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta charSet="utf-8" />
            <meta property="og:title" content={title} key="ogtitle" />
            <meta
                property="og:description"
                content={description || site.description}
                key="ogdesc"
            />
            <meta property="og:type" content={type || 'website'} key="ogtype" />
            <meta
                property="og:image"
                content={
                    imageUrlFor(image).width(1200).url() ||
                    imageUrlFor(site.image).width(1200).url()
                }
                key="ogimage"
            />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || site.description} />
            <meta name="twitter:creator" content={site.twitter} />
            <meta
                name="twitter:image"
                content={
                    imageUrlFor(image).width(300).url() || imageUrlFor(site.image).width(300).url()
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
