import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from '@radix-ui/react-radio-group';


export const Overlay = styled(Dialog.Overlay)`

    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background-color: rgba(0,0,0,0.75);

`;


export const Close = styled(Dialog.Close)`

    position: absolute;
    background-color: transparent;
    border: 0;
    top: 1.5rem;
    right: 1.5rem;
    color: ${props => props.theme.white};
    cursor: pointer;
    line-height: 0;

`


export const Content = styled(Dialog.Content)`

    min-width: 32rem;
    padding: 2.5rem 3rem;
    background-color: ${props => props.theme["gray-800"]};
    border-radius: 6px;

    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    form {
        margin-top: 2rem;

        display: flex;
        flex-flow: column wrap;
        gap: 1rem;

        input {
            border-radius: 6px;
            border: 0;
            background-color: ${props => props.theme["gray-900"]};
            color: ${props => props.theme["green-300"]};
            padding: 1rem;
            
            &::placeholder {
                color: ${props => props.theme["gray-500"]};
            }
        }


        button[type="submit"] {
            height: 48px;
            border: 0;
            background-color: ${props => props.theme["green-500"]};
            color: ${props => props.theme.white};
            font-weight: bold;
            padding: 0 1.25rem;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 1.5rem;

            &:hover{
                background-color: ${props => props.theme["green-700"]};
                transition: background-color 0.2s;

            }
            
        }

    }

`;



export const TransactionType = styled(RadioGroup.Root)`

    display: flex;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem; 


`

interface ITransactionButtonTypeProps {
    variant: 'up' | 'down'
}

export const TransactionButtonType = styled(RadioGroup.Item)<ITransactionButtonTypeProps>`

    flex: 1;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    background-color: ${props => props.theme["gray-700"]};
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    color: ${props => props.theme["green-300"]};

    svg {
        color: ${props => props.variant === 'up' ? props.theme["green-500"] : props.theme["red-300"]}
    }

    span {
        color: ${props => props.theme.white};
    }

    &[data-state='unchecked']:hover{
        background-color: ${props => props.theme["gray-600"]};
        transition: background-color 0.2s;
    }

    &[data-state='checked'] {
        color: ${props => props.theme.white};
        background-color: ${props => props.variant === 'up' ? props.theme["green-500"] : props.theme["red-300"]};

        svg {
            color: ${props => props.theme.white};
        }

        transition: background-color 0.2s;
    }

`

