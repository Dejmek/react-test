import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class FeatureHolder extends Component {
    render() {
        const { className, feature } = this.props;
        return <div className={className}>{feature}</div>;
    }
}

FeatureHolder.propTypes = {
    className: PropTypes.string.isRequired,
    feature: PropTypes.element.isRequired,
};

export default styled(FeatureHolder)`
    height: calc(100vh - 5.5rem);
    width: calc(100vw - 25rem);
    flex-grow: 1;
    background: ${props => props.theme.background};
    border-top: 1.5rem solid ${props => props.theme.border};
    border-left: 1.5rem solid ${props => props.theme.border};
    padding: 0 3rem;
    overflow-y: scroll;
`;
