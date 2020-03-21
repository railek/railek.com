import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import styled from 'styled-components';
import serializers from '../serializers';

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

const StyledHero = styled.div`
    border-bottom: 1px solid var(--gray-800);

    h2 {
        margin-top: var(--space-0);
        font-size: var(--space-24);
        line-height: 1;

        @media (min-width: 768px) {
            font-size: var(--space-32);
        }
    }
`;

const query = graphql`
    query HeroQuery {
        hero: sanityHero {
            _rawTitle
        }
    }
`;

export default function Hero() {
    const { hero } = useStaticQuery(query);

    return (
        <StyledHero>
            <StyledWrapper>
                <PortableText blocks={hero._rawTitle} serializers={serializers} />
            </StyledWrapper>
        </StyledHero>
    );
}
