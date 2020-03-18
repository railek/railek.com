import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledNav = styled.nav`
    display: none;

    @media (min-width: 768px) {
        padding: var(--space-48);
    }

    @media (min-width: 1024px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-48) var(--space-96);
        border-bottom: 1px solid var(--gray-800);
    }

    @media (min-width: 1280px) {
        padding: var(--space-48) var(--space-128);
    }

    .name {
        color: var(--gray-400);
        font-weight: 600;
    }

    ul {
        display: flex;
        gap: var(--space-48);

        li {
            font-weight: 600;
            color: var(--gray-400);
            padding: var(--space-4) var(--space-8);

            &:hover {
                color: var(--gray-100);
            }
        }
    }
`;

const Nav = () => {
    const links = ['About', 'Projects', 'Blog', 'Contact'];

    return (
        <StyledNav>
            <Link className="name" to="/">
                Jean Alexander Brock
            </Link>

            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <Link to={`/${link.toLowerCase()}`}>
                            <span>{link}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledNav>
    );
};

export default Nav;
