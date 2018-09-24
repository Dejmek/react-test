import React from 'react';
import styled from 'styled-components';

import DashedBorder from '../DashedBorder/DashedBorder';

const Input = styled(props => (
    <input
        name={props.name}
        onChange={props.onChange}
        className={props.className}
        checked={props.isChecked}
        type="checkbox"
    />
))`
    position: absolute;
    opacity: 0;
    cursor: pointer;
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 1.5rem;
    width: 1.5rem;

    &::after {
        content: '';
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid rgba(240, 125, 215, 1);
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
    }

    ${Input}:checked ~ &::after {
        display: block;
    }
`;

const Checkbox = styled(({
    className, onChange, name, checked,
}) => (
    <label className={className}>
        <DashedBorder
            width={1.5}
            height={1.5}
            strokeWidth={10}
            strokeDasharray={10}
            rx={50}
            ry={50}
        />
        <Input onChange={onChange} name={name} isChecked={checked} />
        <CheckMark />
    </label>
))`
    display: block;
    position: relative;
    cursor: pointer;
    width: ${props => props.width}rem;
    height: ${props => props.heigh}rem;

    ${DashedBorder} {
        position: absolute;
        top: 0;
        left: 0;
    }
`;

Checkbox.defaultProps = {
    width: 2,
    heigh: 2,
    checked: false,
};

export default Checkbox;
