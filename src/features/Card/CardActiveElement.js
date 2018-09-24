import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

function CardActiveElement(props) {
    const { icon, text, className } = props;
    return (
        <div className={className}>
            {icon}
            {text}
        </div>
    );
}

CardActiveElement.propTypes = {
    className: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    text: PropTypes.string.isRequired,
};

export default styled(CardActiveElement)`
    line-height: 1rem;
    color: ${props => props.theme.text_highlight};
    text-transform: capitalize;
    svg:first-child {
        margin-right: 0.5rem;
    }
    margin-left: 3rem;
`;
