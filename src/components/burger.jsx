import React from 'react';
import styled from 'styled-components';
import { bool, func } from 'prop-types';

const StyledBurger = styled.button`
    padding: var(--space-4);
    display: flex;
    justify-content: center;
    flex-direction: column;

    span {
        display: block;
        width: var(--space-24);
        height: var(--space-2);
        background-color: var(--gray-400);
        transition: width 0.7s ease-in-out;

        :nth-child(2) {
            width: ${(props) => (props.open ? '100%' : '40%')};
            margin: var(--space-6) var(--space-0);
        }
    }
`;

const Burger = ({ open, setOpen }) => {
    const isExpanded = !!open;

    return (
        <StyledBurger
            aria-label="Toggle menu"
            aria-expanded={isExpanded}
            open={open}
            onClick={() => setOpen(!open)}
        >
            <span />
            <span />
            <span />
        </StyledBurger>
    );
};

Burger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired,
};

export default Burger;
