import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { IoMdOpen } from 'react-icons/io';

import Wrapper from '../components/wrapper';
import ScrollTop from '../components/scrollTop';

const StyledFooter = styled.footer`
    border-top: 1px solid var(--gray-800);
    width: 100%;

    & > div {
        display: grid;
        justify-content: space-between;
        grid-auto-flow: row;
        grid-template-columns: repeat(12, minmax(0, 1fr));
        grid-template-rows: repeat(1, minmax(0, 1fr));
        row-gap: var(--space-64);
    }

    @media (min-width: 1280px) {
        row-gap: var(--space-0);
        grid-auto-flow: column;
    }

    .col {
        grid-column: span 12 / span 12;
        align-self: flex-start;

        @media (min-width: 768px) {
            grid-column: span 6 / span 6;
        }

        @media (min-width: 1024px) {
            grid-column: span 3 / span 3;
        }

        &:last-child {
            grid-row: span 1 / span 1;
        }
    }

    ul {
        li {
            margin-top: var(--space-16);
            color: var(--gray-400);

            &:hover {
                color: var(--gray-200);
            }

            a {
                display: flex;
                align-items: center;
                gap: var(--space-8);
            }
        }
    }
`;

const StyledBottom = styled.div`
    border-top: 1px solid var(--gray-800);
    width: 100%;

    & > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 100%;
    }

    p {
        color: var(--gray-400);
        font-size: var(--space-16);
    }
`;

const Footer = () => {
    const links = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

    return (
        <>
            <StyledFooter>
                <Wrapper>
                    <div className="col">
                        <h3>Navigation</h3>
                        <ul>
                            {links.map((link) => (
                                <li key={link}>
                                    <Link to={`/${link.toLowerCase()}`}>{link}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Information</h3>
                        <ul>
                            <li>
                                <a
                                    data-title="Privacy Policy"
                                    href="https://policies.google.com/privacy"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    data-title="Terms of Service"
                                    href="https://policies.google.com/terms"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Contact</h3>
                        <ul>
                            <li>
                                <a href="mailto:jean@railek.com">jean@railek.com</a>
                            </li>
                            <li>
                                <a href="tel:+27818490162">+27 (081) 849 01</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col">
                        <h3>Social</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://twitter.com/rail3k"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Twitter
                                    <IoMdOpen />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/railek"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Github
                                    <IoMdOpen />
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/jean-brock-733398143/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    LinkedIn
                                    <IoMdOpen />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Wrapper>
            </StyledFooter>

            <StyledBottom>
                <Wrapper>
                    <p>© Copyright {new Date().getFullYear()} Railek. All rights reserved.</p>
                    <ScrollTop />
                </Wrapper>
            </StyledBottom>
        </>
    );
};

export default Footer;
