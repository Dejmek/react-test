import React from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import DashedBorder from '../DashedBorder/DashedBorder';

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: ${props => props.height}rem;
    background-color: ${props => (props.active ? props.theme.content : '')};
    justify-content: space-around;
    ${props => (props.active ? 'border-radius: 5px;' : '')};
`;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const ActiveArea = styled.div`
    height: 3rem;
    background: ${props => props.theme.main};
    width: 95%;
    margin-top: 5rem;
    margin-right: auto;
    margin-left: auto;
    border-radius: 0 0 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.theme.text_highlight};
`;

const Button = styled.button`
    background: none;
    border: none;
    color: inherit;
    margin: 0;
    padding: 0;
    &:focus {
        color: ${props => props.theme.text_highlight};
        outline: none;
    }
`;

const Card = (props) => {
    const {
        active,
        width,
        height,
        className,
        activeChildren,
        children,
        onToggleActive,
        icon,
    } = props;
    const border = active ? null : (
        <DashedBorder
            width={width}
            height={height}
            strokeWidth={10}
            strokeDasharray={15}
            rx={50}
            ry={50}
        />
    );
    const activeArea = active ? <ActiveArea>{activeChildren}</ActiveArea> : null;
    return (
        <div className={className}>
            <Wrapper>
                {border}
                <Overlay active={active} height={height} width={width}>
                    {children}
                </Overlay>
                {activeArea}
            </Wrapper>
            <Button onClick={onToggleActive}>{icon}</Button>
        </div>
    );
};

Card.defaultProps = {
    active: false,
};

Card.propTypes = {
    active: PropTypes.bool,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    onToggleActive: PropTypes.func.isRequired,
    icon: PropTypes.element.isRequired,
    activeChildren: PropTypes.node.isRequired,
};

export default styled(Card)`
    width: ${props => props.width}rem;
    display: flex;
    align-items: center;
    & > div:last-child {
        cursor: pointer;
    }
`;
