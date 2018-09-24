import React from 'react';
import styled from 'styled-components';

export default styled((props) => {
    const viewBox = `0 0 ${props.width * 100} ${props.height * 100}`;
    return (
        <svg className={props.className} viewBox={viewBox} fill="none">
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(240,125,215,.3)" />
                    <stop offset="100%" stopColor="rgba(151,56,189,.3)" />
                </linearGradient>
            </defs>
            <rect
                height={props.height * 100}
                width={props.width * 100}
                rx={props.rx}
                ry={props.ry}
                stroke="url(#gradient)"
            />
        </svg>
    );
})`
    height: 100%;
    width: 100%;
    & rect {
        stroke-width: ${props => props.strokeWidth || 10};
        stroke-dasharray: ${props => props.strokeDasharray || 10};
    }
`;
