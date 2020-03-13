import React from 'react';
import PropTypes from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import styled from 'styled-components';

const StyledCode = styled.div`
    margin: var(--space-32) var(--space-0);
`;

function Code({ node }) {
    if (!node.code) {
        return undefined;
    }
    return (
        <StyledCode>
            <SyntaxHighlighter language={node.language || 'text'} style={dracula}>
                {node.code}
            </SyntaxHighlighter>
        </StyledCode>
    );
}

export default Code;

Code.propTypes = {
    node: PropTypes.object.isRequired,
};
