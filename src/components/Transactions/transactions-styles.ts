import styled from "styled-components";


export const TransactionContainer = styled.main`

    width: 100%;
    max-width: 1120px;
    margin: 1rem auto;
    padding: 1.5rem;
`

export const TransactionTable = styled.table`
    
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    margin-top: 1.5rem;

    

    td {
        padding: 1.25rem 2rem;
        background-color: ${props => props.theme["gray-700"]};

        &:first-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            width: 35%;
        }

        &:last-child {
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }
    }

`

interface IPriceHighLightProps {
    variant: 'up' | 'down'
} 


export const PriceHighLight = styled.span<IPriceHighLightProps>`

color: ${props => props.variant === 'up' ? props.theme["green-300"] : props.theme["red-300"] }


`