import React, { useState, useRef } from 'react';
import Styled from 'styled-components';

import Logo from '../components/logo';
import Social from '../components/social';
import Menu from '../components/menu';
import Burger from '../components/burger';

const StyledHeader = Styled.header`
    position: sticky;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 64px;
    background-color: var(--gray-900);
    border-bottom: 1px solid var(--gray-700);

    @media (min-width: 768px) {
        left: 0;
        min-width: var(--space-96);
        height: 100vh;
        border-bottom: none;
    }

    @media (min-width: 1024px) {
        min-width: var(--space-128);
    }

    @media (min-width: 1280px) {
        min-width: var(--space-192);
    }

    & > div {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        padding: var(--space-12) var(--space-24) var(--space-12) var(--space-24);

        @media (min-width: 768px) {
            flex-direction: column;
            padding: var(--space-32);
        }

        @media (min-width: 1024) {
            padding: var(--space-48) var(--space-40) var(--space-48) var(--space-40);
        }

        @media (min-width: 1280px) {
            padding: var(--space-96) var(--space-64) var(--space-96) var(--space-64);
        }
    }
`;

const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = 'main-menu';

    return (
        <StyledHeader>
            <div ref={node}>
                <Logo />
                <nav aria-label="Main navigation">
                    <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                </nav>
                <Social />
            </div>
        </StyledHeader>
    );
};

export default Header;
