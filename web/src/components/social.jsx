import React from 'react';
import styled from 'styled-components';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const StyledSocial = styled.div`
    display: none;
    order: 3;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    a {
        margin-bottom: var(--space-16);

        &:last-of-type {
            margin-bottom: var(--space-0);
        }

        svg {
            font-size: var(--space-32);
            color: var(--gray-300);

            :hover {
                color: var(--gray-50);
            }
        }
    }
`;

const Social = () => {
    return (
        <StyledSocial>
            <a href="https://twitter.com/rail3k" target="_blank" rel="noopener noreferrer">
                <IoLogoTwitter />
            </a>
            <a href="https://github.com/railek" target="_blank" rel="noopener noreferrer">
                <IoLogoGithub />
            </a>
            <a
                href="https://www.linkedin.com/in/jean-brock-733398143/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <IoLogoLinkedin />
            </a>
        </StyledSocial>
    );
};

export default Social;
