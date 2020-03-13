import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';

export default function Image({ node }) {
    const fluidProps = getFluidGatsbyImage(
        node.asset._ref,
        { maxWidth: 1024 },
        {
            projectId: process.env.GATSBY_SANITY_PROJECT_ID,
            dataset: process.env.GATSBY_SANITY_DATASET,
        },
    );
    return <Img style={{ margin: '32px 0 32px 0' }} fluid={fluidProps} alt={node.alt} />;
}

Image.propTypes = {
    node: PropTypes.object.isRequired,
};
