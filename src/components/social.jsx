import React from 'react';
import Styled from 'styled-components';
import { IoLogoTwitter, IoLogoGithub, IoLogoLinkedin } from 'react-icons/io';

const StyledSocial = Styled.div`
    display: none;
    order: 3;

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
    }

    svg {
        font-size: var(--space-32);
        color: var(--gray-50);
        margin-bottom: 16px;

        &:last-of-type {
            margin-bottom: 0px;
        }
    }
`;

const Social = () => {
    return (
        <StyledSocial>
            <IoLogoTwitter />
            <IoLogoGithub />
            <IoLogoLinkedin />
        </StyledSocial>
    );
};

export default Social;
