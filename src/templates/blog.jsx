import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { IoIosReturnLeft, IoIosReturnRight } from 'react-icons/io';
import Layout from '../components/layout';
import SEO from '../components/seo';
import serializers from '../serializers';
import Wrapper from '../components/wrapper';
import Faq from '../components/faq';

const StyledHeader = styled.div`
    span {
        text-transform: uppercase;
        font-size: var(--space-12);
        color: var(--gray-300);
    }

    h2 {
        color: var(--gray-50);
        font-size: var(--space-32);
        margin-bottom: var(--space-8);
    }

    p {
        color: var(--gray-200);
    }
`;

export const query = graphql`
    query($slug: String!) {
        blog: sanityBlog(slug: { current: { eq: $slug } }) {
            id
            title
            description
            _rawContent
            category {
                title
                slug {
                    current
                }
            }
            faqs {
                _key
                question
                _rawAnswer
            }
            slug {
                current
            }
            image {
                asset {
                    fluid(maxWidth: 1280) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
    }
`;

const Navigation = styled.nav`
    width: 100%;

    ul {
        display: flex;
        flex-direction: column;
        border-top: 1px solid var(--gray-800);

        @media (min-width: 768px) {
            flex-direction: row;
        }

        li {
            display: flex;
            flex: 1 1 0%;

            &:last-of-type {
                border-top: 1px solid var(--gray-800);
                text-align: right;

                @media (min-width: 768px) {
                    border-top: none;
                    border-left: 1px solid var(--gray-800);
                }
            }

            &:hover {
                background-color: var(--gray-800);
            }
        }
    }

    .next,
    .prev {
        width: 100%;
        padding: var(--space-24);

        @media (min-width: 768px) {
            padding: var(--space-48);
        }

        @media (min-width: 1024px) {
            padding: var(--space-96);
        }

        @media (min-width: 1280px) {
            padding: var(--space-128);
        }

        h2 {
            color: var(--gray-50);
            font-size: var(--space-24);
            margin-top: var(--space-8);
        }

        span {
            display: flex;
            gap: var(--space-8);
            align-items: center;
            color: var(--gray-400);

            svg {
                font-size: var(--space-24);
            }
        }
    }

    .next {
        span {
            justify-content: flex-end;
        }
    }
`;

export default function BlogTemplate({ data, pageContext }) {
    const blog = data && data.blog;
    const { next, prev, prevTitle, nextTitle } = pageContext;

    return (
        <Layout>
            <SEO title={blog.title} description={blog.description} image={blog.image.asset} />

            <Wrapper>
                <StyledHeader>
                    <span>{blog.category.title}</span>
                    <h2>{blog.title}</h2>
                    <p>{blog.description}</p>
                </StyledHeader>
            </Wrapper>

            <BackgroundImage
                Tag="figure"
                style={{
                    height: '320px',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                    backgroundAttachment: 'fixed',
                    filter: 'grayscale(1)',
                }}
                fluid={blog.image.asset.fluid}
            />
            <Wrapper>
                <PortableText blocks={blog._rawContent} serializers={serializers} />
                <Faq node={blog.faqs} />
            </Wrapper>

            <Navigation>
                <ul>
                    <li>
                        {prev && (
                            <Link className="prev" to={`../${prev.slug.current}`}>
                                <span>
                                    <IoIosReturnLeft />
                                    Previous
                                </span>
                                <h2>{prevTitle}</h2>
                            </Link>
                        )}
                    </li>
                    <li>
                        {next && (
                            <Link className="next" to={`../${next.slug.current}`}>
                                <span>
                                    Next
                                    <IoIosReturnRight />
                                </span>
                                <h2>{nextTitle}</h2>
                            </Link>
                        )}
                    </li>
                </ul>
            </Navigation>
        </Layout>
    );
}

BlogTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    pageContext: PropTypes.object.isRequired,
};
