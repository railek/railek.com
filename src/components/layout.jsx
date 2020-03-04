import React from 'react';
import PropTypes from 'prop-types';
import Styled from 'styled-components';

import Header from '../sections/header';

import 'modern-css-reset';
import 'fontsource-bungee';
import 'fontsource-open-sans';

const Container = Styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: visible;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <main>{children}</main>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
