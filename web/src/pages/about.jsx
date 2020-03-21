import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Introduction from '../sections/introduction';
import Stack from '../sections/stack';
import SectionTitle from '../components/section-title';

const query = graphql`
    query BackendQuery {
        backend: sanityBackend {
            title
            list {
                title
                description
                url
                icon {
                    asset {
                        url
                        extension
                    }
                }
            }
        }
        frontend: sanityFrontend {
            title
            list {
                title
                description
                url
                icon {
                    asset {
                        url
                        extension
                    }
                }
            }
        }
        tools: sanityTools {
            title
            list {
                title
                description
                url
                icon {
                    asset {
                        url
                        extension
                    }
                }
            }
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

const StyledGrid = styled.div`
    display: grid;
    gap: var(--space-48);

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1536px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
`;

const About = () => {
    const { backend, frontend, tools } = useStaticQuery(query);

    return (
        <Layout>
            <SEO title="About" />
            <Introduction />
            <StyledWrapper>
                <SectionTitle title="Tech Stack" />
                <StyledGrid>
                    <Stack title={frontend.title} list={frontend.list} />
                    <Stack title={backend.title} list={backend.list} />
                    <Stack title={tools.title} list={tools.list} />
                </StyledGrid>
            </StyledWrapper>
        </Layout>
    );
};

export default About;
