import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import InlineSVG from '../components/inline-svg';
import serializers from '../serializers';

const query = graphql`
    query ServicesQuery {
        services: sanityServices {
            list {
                title
                _rawDescription
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

const StyledGrid = styled.ul`
    display: grid;
    gap: var(--space-64);

    @media (min-width: 1024px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1536px) {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    li {
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    svg {
        font-size: var(--space-48);
        margin-bottom: var(--space-24);
    }

    h3 {
        font-size: var(--space-20);
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

const Services = () => {
    const { services } = useStaticQuery(query);
    const { list } = services;

    return (
        <StyledWrapper>
            <StyledGrid>
                {list.map((item) => (
                    <li key={item.title}>
                        <InlineSVG logo={item.icon} />
                        <h3>{item.title}</h3>
                        <PortableText blocks={item._rawDescription} serializers={serializers} />
                    </li>
                ))}
            </StyledGrid>
        </StyledWrapper>
    );
};

export default Services;
