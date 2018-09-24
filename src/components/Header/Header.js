import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';

const Wrapper = styled.header.attrs({
    height: props => props.height || '1rem',
})`
    height: ${props => props.height};
    width: 100%;
    background: ${props => props.theme.content};
`;

const Header = ({ height, children }) => <Wrapper height={height}>{children}</Wrapper>;

Header.defaultProps = {
    height: '3rem',
};

Header.propTypes = {
    height: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Header;
