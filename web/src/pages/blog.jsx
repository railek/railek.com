import React from 'react';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { IoIosArrowRoundForward } from 'react-icons/io';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionTitle from '../components/section-title';

const StyledGrid = styled.div`
    display: grid;
    gap: var(--space-16);

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
`;

const StyledCard = styled.div`
    border-radius: var(--space-4);
    filter: grayscale(1);
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%), 0 2px 4px -1px rgb(0 0 0 / 25%),
        0 4px 8px -2px rgb(0 0 0 / 25%);

    &:hover {
        filter: grayscale(0);
        transform: scale(1.01);
    }

    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.4) 30%, rgba(0, 0, 0, 0.2) 100%);
        min-height: var(--space-176);
        padding: var(--space-16);

        @media (min-width: 768px) {
            min-height: var(--space-320);
        }
    }

    span {
        text-transform: uppercase;
        font-size: var(--space-12);
        color: var(--gray-300);
    }

    h3 {
        color: var(--gray-50);
        font-size: var(--space-20);
    }

    .instruction {
        display: flex;
        align-items: center;
        gap: var(--space-4);
        font-size: var(--space-14);

        & svg {
            font-size: var(--space-24);
        }
    }
`;

const StyledWrapper = styled.div`
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
`;

export const query = graphql`
    query BlogPageQuery {
        blog: allSanityBlog {
            edges {
                node {
                    id
                    title
                    slug {
                        current
                    }
                    category {
                        title
                        slug {
                            current
                        }
                    }
                    image {
                        asset {
                            fluid(maxWidth: 384) {
                                ...GatsbySanityImageFluid
                            }
                        }
                    }
                }
            }
        }
    }
`;

const BlogPage = (props) => {
    const { data } = props;
    const blogs = data && data.blog && MapEdgesToNodes(data.blog);

    return (
        <Layout>
            <SEO title="Blog" />
            <StyledWrapper>
                <SectionTitle title="Experiments, side projects, and just generally some stuff I find interesting." />
                <StyledGrid>
                    {blogs.map((item) => (
                        <BlogCard
                            key={item.id}
                            slug={item.slug}
                            title={item.title}
                            category={item.category}
                            description={item.description}
                            publishedAt={item.publishedAt}
                            image={item.image}
                        />
                    ))}
                </StyledGrid>
            </StyledWrapper>
        </Layout>
    );
};

function BlogCard({ slug, title, category, image }) {
    return (
        <Link to={`/blog/${slug.current}`}>
            <StyledCard>
                <BackgroundImage Tag="figure" fluid={image.asset.fluid}>
                    <article>
                        <header>
                            <span>{category.title}</span>
                            <h3>{title}</h3>
                        </header>
                        <div className="instruction">
                            <IoIosArrowRoundForward />
                            Read Post
                        </div>
                    </article>
                </BackgroundImage>
            </StyledCard>
        </Link>
    );
}

export default BlogPage;

BlogPage.propTypes = {
    data: PropTypes.object.isRequired,
};

BlogCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.object.isRequired,
    image: PropTypes.object.isRequired,
    slug: PropTypes.object.isRequired,
};
