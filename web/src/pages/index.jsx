import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../sections/hero';
import Services from '../sections/services';

const Index = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <Hero />
            <Services />
        </Layout>
    );
};

export default Index;
