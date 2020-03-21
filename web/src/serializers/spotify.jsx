import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const StyledFrame = styled.iframe`
    margin: var(--space-32) var(--space-0);
`;

function Spotify({ node }) {
    return (
        <StyledFrame
            title={node.title}
            src={node.url}
            width="100%"
            height="152"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
        />
    );
}

export default Spotify;

Spotify.propTypes = {
    node: PropTypes.object.isRequired,
};
