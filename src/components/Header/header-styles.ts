
import styled from "styled-components";


export const HeaderContainer = styled.div`

    margin: 0;
    width: 100%;
    padding: 2.5rem 0 7.5rem;
    background-color: ${props => props.theme["gray-900"]};
`

export const HeaderContent = styled.nav`

    
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
 
  

    button {
        background-color: ${props => props.theme["green-500"]};
        color: ${props => props.theme.white};
        height: 40px;
        border: 0;
        padding: 0 1.25rem;
        border-radius: 6px;
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.2s;

        &:hover {
            background-color: ${props => props.theme["green-700"]}
        }
    
    }

   

`