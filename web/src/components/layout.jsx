import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Nav from '../sections/nav';
import Header from '../sections/header';
import Footer from '../sections/footer';

import 'fontsource-bungee';
import 'fontsource-open-sans';

const Container = styled.div`
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
            <div style={{ width: '100%' }}>
                <Nav />
                <main>{children}</main>
                <Footer />
            </div>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
