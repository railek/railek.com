import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import PortableText from '@sanity/block-content-to-react';
import { IoLogoGithub, IoMdOpen } from 'react-icons/io';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import MapEdgesToNodes from '../lib/map-edges-to-nodes';
import serializers from '../serializers';
import SectionTitle from '../components/section-title';

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

const StyledCard = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--gray-800);
    border-radius: var(--space-2);
    min-height: var(--space-256);
    padding: var(--space-24);

    transition: all 0.2s ease-in-out;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 25%), 0 2px 4px -1px rgb(0 0 0 / 25%),
        0 4px 8px -2px rgb(0 0 0 / 25%);

    &:hover {
        transform: scale(1.01);
    }

    @media (min-width: 768px) {
        min-height: var(--space-384);
    }

    h3 {
        color: var(--gray-50);
        font-size: var(--space-20);
    }

    .icons {
        display: flex;
        justify-content: space-between;

        svg {
            font-size: var(--space-24);
            color: var(--gray-400);
            margin-bottom: var(--space-32);
        }
    }

    footer,
    ul {
        display: flex;
        gap: var(--space-12);
        flex-wrap: wrap;
        padding: 0;

        li {
            font-size: var(--space-14);
            color: var(--gray-400);
        }
    }
`;

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

const query = graphql`
    query ProjectQuery {
        project: allSanityProject {
            edges {
                node {
                    _id
                    title
                    _rawDescription
                    url
                    tech
                }
            }
        }
    }
`;

function ProjectCard({ title, url, tech, description }) {
    return (
        <a href={url} target="_blank" rel="nofollow noopener noreferrer">
            <StyledCard>
                <header>
                    <div className="icons">
                        <IoLogoGithub />
                        <IoMdOpen />
                    </div>
                    <h3>{title}</h3>
                    <PortableText blocks={description} serializers={serializers} />
                </header>
                <footer>
                    <ul>
                        {tech.map((item) => (
                            <li key={item.id}>{item}</li>
                        ))}
                    </ul>
                </footer>
            </StyledCard>
        </a>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    tech: PropTypes.array.isRequired,
    description: PropTypes.array.isRequired,
};

const ProjectPage = () => {
    const { project } = useStaticQuery(query);
    const projectsNodes = MapEdgesToNodes(project);

    return (
        <Layout>
            <SEO title="Projects" />
            <StyledWrapper>
                <SectionTitle title="Noteworthy Open-Source Projects" />

                <StyledGrid>
                    {projectsNodes.map((item) => (
                        <ProjectCard
                            key={item._id}
                            title={item.title}
                            url={item.url}
                            tech={item.tech}
                            description={item._rawDescription}
                        />
                    ))}
                </StyledGrid>
            </StyledWrapper>
        </Layout>
    );
};

export default ProjectPage;
