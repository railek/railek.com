import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH2 = styled.h2`
    color: var(--gray-50);
    font-size: var(--space-24);
    margin: var(--space-64) var(--space-0) var(--space-16) var(--space-0);
`;

const StyledParagraph = styled.p`
    color: var(--gray-300);
    font-size: var(--space-16);
    margin: var(--space-16) var(--space-0);
`;

export default function Block({ node, children }) {
    switch (node.style) {
        case 'h2': {
            return <StyledH2>{children}</StyledH2>;
        }
        default:
            return <StyledParagraph>{children}</StyledParagraph>;
    }
}

Block.propTypes = {
    node: PropTypes.object.isRequired,
    children: PropTypes.array.isRequired,
};
