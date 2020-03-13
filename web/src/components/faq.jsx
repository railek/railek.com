import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import PortableText from '@sanity/block-content-to-react';
import { IoIosArrowDown } from 'react-icons/io';
import serializers from '../serializers';

const StyledItem = styled.div`
    background-color: var(--gray-800);
    border-radius: var(--space-2);

    & > div {
        padding: var(--space-24);
        color: var(--gray-300);
    }

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--space-24);
        width: 100%;

        span {
            font-weight: 600;
            font-size: var(--space-18);
            color: var(--gray-100);
        }

        .rotate {
            transform: rotate(180deg);
        }

        svg {
            font-size: var(--space-24);
            color: var(--gray-300);
            transition-property: transform;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
        }
    }
`;

const StyledFaq = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--space-8);
    margin-top: var(--space-128);
`;

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledItem>
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{title}</span>
                <IoIosArrowDown className={`${!isOpen ? ' rotate' : ''}`} />
            </button>
            {isOpen && <div>{children}</div>}
        </StyledItem>
    );
};

Item.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};

export default function Faq({ node }) {
    return (
        <StyledFaq>
            {node.map((item) => (
                <Item key={item._key} title={item.question}>
                    <PortableText blocks={item._rawAnswer} serializers={serializers} />
                </Item>
            ))}
        </StyledFaq>
    );
}

Faq.propTypes = {
    node: PropTypes.array.isRequired,
};
