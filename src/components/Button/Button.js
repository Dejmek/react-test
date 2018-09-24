import styled from 'styled-components';

export default styled.button`
height: 2rem;
padding-left: 2.5rem 
padding-right: 2.5rem 
padding-top: 0.5rem;
padding-bottom: 0.5rem;
background: ${props => props.theme.main_gradient};
border-radius: ${props => props.theme.radius || '0.5rem'};
text-align: center;
font-size: 1rem;
color: ${props => props.theme.text_highlight || '#fff'};
font-weight: 500;
border: none;
`;
