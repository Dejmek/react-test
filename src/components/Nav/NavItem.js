import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.span`
    margin-left: 1rem;
`;

const NavItem = ({ className, label, icon }) => (
    <button type="button" className={className} href="">
        {label}
        <Icon>{icon}</Icon>
    </button>
);

NavItem.defaultProps = {
    icon: null,
};

NavItem.propTypes = {
    icon: PropTypes.element,
    label: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
};

export default styled(NavItem)`
    color: ${props => props.theme.text_lighter};
    padding: 1.5rem;
    text-transform: uppercase;
    text-decoration: none;
    border: none;
    background: none;
    color: inherit;
`;
