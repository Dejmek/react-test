import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Icon = styled.div`
    padding-right: 1.5rem;
`;

const ListItem = ({
    icon, className, onClick, children,
}) => {
    let iconElement = null;
    if (icon) {
        iconElement = <Icon>{icon}</Icon>;
    }
    return (
        <li className={className}>
            <button type="button" onClick={onClick}>
                {iconElement}
                <span>{children}</span>
            </button>
        </li>
    );
};

ListItem.defaultProps = {
    active: false,
    icon: null,
    onClick: null,
};

ListItem.propTypes = {
    active: PropTypes.bool,
    icon: PropTypes.element,
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default styled(ListItem)`
    border-left-width: 0.4rem;
    border-left-style: solid;
    border-color: transparent;
    ${props => (props.active
        ? `
	border-image: linear-gradient(to bottom, rgba(240,125,215,1), rgba(151,56,189,1)) 1 100%;
	`
        : '')} height: 1rem;
    list-style: none;
    padding: 1.5rem;

    button {
        display: flex;
        background: none;
        border: none;
        color: inherit;
    }
`;
