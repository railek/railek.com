import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InlineSVG from '../components/inline-svg';

const StyledList = styled.ul`
    li {
        display: flex;
        align-items: center;
        margin-bottom: var(--space-8);

        :last-of-type {
            margin-bottom: var(--space-0);
        }

        svg {
            color: var(--gray-100);
            width: var(--space-20);
            height: auto;
        }

        h4 {
            margin-left: var(--space-12);
            color: var(--gray-300);
        }

        span {
            color: var(--gray-300);
        }
    }
`;

const StyledHeading = styled.h2`
    color: var(--gray-100);
    margin-bottom: var(--space-16);
    font-size: var(--space-20);
`;

const IconList = ({ list }) => {
    return (
        <StyledList>
            {list.map((item) => (
                <li key={item.title}>
                    <InlineSVG logo={item.icon} />
                    <a href={item.url} rel="noopener nofollow noreferrer">
                        <h4>{item.title}</h4>
                    </a>
                    <span>&nbsp;&nbsp;-&nbsp;&nbsp;{item.description}</span>
                </li>
            ))}
        </StyledList>
    );
};

IconList.propTypes = {
    list: PropTypes.any.isRequired,
};

const Stack = ({ title, list }) => {
    return (
        <section>
            <StyledHeading>{title}</StyledHeading>
            <IconList list={list} />
        </section>
    );
};

Stack.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
};

export default Stack;
