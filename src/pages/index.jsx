import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: black;
`;

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Container />
        </Layout>
    );
};

export default IndexPage;
