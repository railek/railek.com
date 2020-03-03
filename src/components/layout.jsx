import React from 'react';
import PropTypes from 'prop-types';

import 'fontsource-bungee';
import 'fontsource-open-sans';

const Layout = ({ children }) => {
    return (
        <>
            <main>{children}</main>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
