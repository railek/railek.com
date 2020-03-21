import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';
import styled from 'styled-components';

const StyledButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--gray-700);
    border-radius: 100%;
    width: var(--space-48);
    height: var(--space-48);

    &:hover {
        border: 1px solid var(--gray-100);
        transform: scale(1.1);
        transition: all 0.2s ease-in-out;
    }

    svg {
        font-size: var(--space-24);
        color: var(--gray-100);
    }
`;

const ScrollTotTop = () => {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            window.scrollTo({ top: 0, behavior: 'smooth' });

            setTimeout(() => {
                setClicked(false);
            }, 1000);
        }
    });

    return (
        <StyledButton onClick={() => setClicked(true)} type="button">
            <IoIosArrowRoundUp />
        </StyledButton>
    );
};

export default ScrollTotTop;
