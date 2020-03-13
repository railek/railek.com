import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledMenu = styled.div`
    align-items: center;
    background-color: var(--gray-900);
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    left: 0;
    position: fixed;
    right: 0;
    text-align: right;
    top: 64px;
    transition: width 0.4s ease-in-out;
    width: ${(props) => (!props.open ? '0%' : '100%')};

    @media (min-width: 768px) {
        border-right: 1px solid var(--gray-800);
        height: 100%;
        justify-content: flex-start;
        left: var(--space-96);
        min-height: 100vh;
        overflow: hidden;
        text-align: left;
        top: 0;
    }

    @media (min-width: 1024px) {
        left: var(--space-128);
    }

    @media (min-width: 1280px) {
        left: var(--space-192);
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: var(--space-24);
        padding: var(--space-24);

        @media (min-width: 768px) {
            padding: var(--space-48);
            gap: var(--space-48);
        }

        @media (min-width: 1024px) {
            gap: var(--space-64);
        }
    }

    h1 {
        font-size: var(--space-24);
        color: var(--gray-400);
        line-height: 100%;

        &:hover {
            color: var(--gray-200);
        }

        @media (min-width: 768px) {
            font-size: var(--space-32);
        }

        @media (min-width: 1024px) {
            font-size: var(--space-48);
        }

        @media (min-width: 1280px) {
            font-size: var(--space-64);
        }
    }
`;

const Menu = ({ open, setOpen }) => {
    const isHidden = !!open;
    const links = ['Home', 'About', 'Projects', 'Blog', 'Contact'];

    return (
        <StyledMenu open={open} aria-hidden={!isHidden}>
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <Link onClick={() => setOpen(!open)} to={`/${link.toLowerCase()}`}>
                            <h1>{link}</h1>
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledMenu>
    );
};

Menu.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.object.isRequired,
};

export default Menu;
