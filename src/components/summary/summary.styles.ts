
import styled, { css } from "styled-components";

export const SummaryContainer = styled.section`


width: 100%;
max-width: 1120px;
margin: 0 auto;
padding: 0 1.5rem;

display: flex;
flex-flow: row wrap;
justify-content: space-between;
align-items: center;
gap: 1.5rem;

margin-top: -5rem;

`

interface ISummaryCardProps {
    variant?: 'green';
}




export const SummaryCard = styled.div<ISummaryCardProps>`

background-color: ${props => props.theme["gray-600"]};
border: 0;
border-radius: 4px;
padding: 2rem;
height: 140px;

display: flex;
flex-flow: column wrap;
justify-content: space-between;

flex: 1;

${props => props.variant === 'green' && css`
    background-color: ${props.theme["green-700"]}
`}


`

export const SummaryCardHeader = styled.div`

display: flex;
justify-content: space-between;
align-items: center;

span {
    color: ${props => props.theme["gray-300"]};
    font-size: 0.9rem;
}

`

export const SummaryCardBody = styled.div`

font-weight: 700;
font-size: 1.3rem;
color: ${props => props.theme.white};
text-align: left;


`


