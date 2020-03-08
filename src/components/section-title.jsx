import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledHeader = styled.h2`
    margin-bottom: var(--space-64);
    position: relative;
    font-size: var(--space-24);
    color: var(--gray--50);
    line-height: 110%;
    padding-bottom: 16px;

    @media (min-width: 768px) {
        font-size: var(--space-32);
        max-width: 32ch;
    }

    &::after {
        content: '';
        display: block;
        width: var(--space-96);
        height: var(--space-8);
        background: var(--gray-400);
        border-radius: var(--space-1);
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;
export default function SectionTitle({ title }) {
    return <StyledHeader>{title}</StyledHeader>;
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
};
