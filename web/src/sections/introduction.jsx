import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';
import { SiUpwork } from 'react-icons/si';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
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

const StyledContent = styled.div`
    p {
        max-width: 64ch;
        color: var(--gray-100);
    }
`;

const StyledButtons = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: var(--space-48);

    .resume {
        border-radius: var(--space-4);
        border: 2px solid var(--gray-100);
        background: transparent;
        padding: var(--space-10) var(--space-16);
        transition: all 0.2s ease-in-out;
        color: var(--gray-100);
        font-weight: 700;
        font-size: var(--space-14);
        text-transform: uppercase;

        :hover {
            background-color: var(--gray-100);
            color: var(--gray-900);
        }

        @media (min-width: 768px) {
            width: auto;
        }
    }

    .upwork {
        margin-left: var(--space-16);

        svg {
            font-size: var(--space-32);
            color: var(--gray-100);
            transition: color 0.2s ease-in-out;

            :hover {
                color: var(--upwork);
            }
        }
    }
`;

const query = graphql`
    query IntroductionQuery {
        introduction: sanityIntroduction {
            title
            _rawBody
            image {
                asset {
                    fluid(maxWidth: 1920) {
                        ...GatsbySanityImageFluid
                    }
                }
            }
        }
        metadata: sanityMetadata {
            resume {
                asset {
                    url
                }
            }
        }
    }
`;

export default function Introduction() {
    const { introduction, metadata } = useStaticQuery(query);

    return (
        <BackgroundImage
            style={{
                width: '100%',
                backgroundPosition: 'center left',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
            Tag="section"
            fluid={introduction.image.asset.fluid}
            backgroundColor="#040e18"
        >
            <StyledWrapper>
                <SectionTitle title={introduction.title} />
                <StyledContent>
                    <PortableText
                        className="content"
                        blocks={introduction._rawBody}
                        serializers={serializers}
                    />
                </StyledContent>

                <StyledButtons>
                    <a
                        href={metadata.resume.asset.url}
                        rel="noopener nofollow noreferrer"
                        target="_blank"
                        className="resume"
                    >
                        Download Resume
                    </a>
                    <a
                        href="https://www.upwork.com/freelancers/~010179bc29f8199995"
                        rel="noopener nofollow noreferrer"
                        target="_blank"
                        className="upwork"
                    >
                        <button type="button">
                            <SiUpwork />
                        </button>
                    </a>
                </StyledButtons>
            </StyledWrapper>
        </BackgroundImage>
    );
}
