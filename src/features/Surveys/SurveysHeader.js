import React from 'react';
import styled from 'styled-components';
import H1 from '../../components/H/H1';
import Button from '../../components/Button/Button';

const ExtendedH1 = styled(H1)`
    padding-left: 1rem;
`;

export default styled(props => (
    <div className={props.className}>
        <ExtendedH1>Surveys</ExtendedH1>
        <Button>New survey</Button>
    </div>
))`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.text_highlight};
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-image: linear-gradient(to bottom, rgba(240, 125, 215, 0.2), rgba(151, 56, 189, 0.2)) 1;
`;
