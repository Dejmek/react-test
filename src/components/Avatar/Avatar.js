import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
    border-radius: 50%;
    border: 2px solid #2ad3f9;
    padding: 2px;
    width: ${props => props.size};
    height: ${props => props.size};
`;

const Img = styled.img`
    border-radius: 50%;
    vertical-align: middle;
    width: 100%;
    height: 100%;
`;

function Avatar(props) {
    const { size, src } = props;
    return (
        <Circle size={size}>
            {' '}
            <Img src={src} alt="avatar" />
        </Circle>
    );
}

Avatar.defaultProps = {
    size: '1rem',
};

Avatar.propTypes = {
    size: PropTypes.string,
    src: PropTypes.string.isRequired,
};

export default Avatar;
