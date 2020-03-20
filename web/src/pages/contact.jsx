import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from '../components/seo';
import SectionTitle from '../components/section-title';

const StyledWrapper = styled.div`
    padding: var(--space-24);
    max-width: 1024px;

    @media (min-width: 768px) {
        padding: var(--space-48);
    }

    @media (min-width: 1024px) {
        padding: var(--space-96);
    }

    @media (min-width: 1280px) {
        padding: var(--space-128);
    }
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;

    input,
    textarea {
        width: 100%;
        margin-bottom: var(--space-20);
        background-color: var(--gray-800);
        border: 1px solid var(--gray-700);
        color: var(--gray-100);
        padding: var(--space-10) var(--space-16);
        border-radius: var(--space-4);
        outline: none;
        resize: none;
        appearance: none;
        transition: all 0.5s ease;

        :focus {
            border: 1px solid var(--gray-300);
        }

        ::placeholder {
            color: var(--gray-400);
        }
    }

    .name-wrapper {
        @media (min-width: 640px) {
            display: flex;
            flex-direction: row;
            gap: 20px;
        }
    }
`;

const StyledButton = styled.button`
    border-radius: var(--space-4);
    background: var(--gray-500);
    padding: var(--space-10) var(--space-16);
    transition: background 0.4s ease;
    color: var(--gray-100);
    font-weight: 900;
    font-size: var(--space-14);
    text-transform: uppercase;

    @media (min-width: 768px) {
        max-width: 50%;
    }

    &:hover {
        background: var(--gray-600);
    }

    &:active {
        background: var(--gray-800);
        transition: all 0.2s ease;
    }
`;

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />
            <StyledWrapper>
                <SectionTitle title="Start a project with me!" />
                <StyledForm name="contact" method="POST" data-netlify="true">
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="name-wrapper">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="* First Name"
                            required
                        />

                        <input
                            type="text"
                            id="last_name"
                            name="last_name"
                            placeholder="* Last Name"
                            required
                        />
                    </div>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="* Email Address"
                        required
                    />

                    <input type="phone" id="phone" name="phone" placeholder="* Phone" required />

                    <textarea
                        id="message"
                        name="message"
                        placeholder="Describe what you’re looking to achieve - be as descriptive as possible"
                        rows="8"
                    />

                    <StyledButton type="submit">Let&apos;s Talk</StyledButton>
                </StyledForm>
            </StyledWrapper>
        </Layout>
    );
};

export default Contact;
