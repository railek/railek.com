import React from 'react';
import SVG from 'react-inlinesvg';
import PropTypes from 'prop-types';

export default function InlineSVG({ logo }) {
    if (!logo || !logo.asset) {
        return null;
    }

    if (logo.asset.extension === 'svg') {
        return <SVG src={logo.asset.url} />;
    }

    return <img src={logo.asset.url} alt={logo.title} />;
}

InlineSVG.propTypes = {
    logo: PropTypes.any.isRequired,
};
