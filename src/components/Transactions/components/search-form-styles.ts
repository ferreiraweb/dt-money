import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  align-items: center;

  gap: 1rem;
  width: 100%;
  max-width: 1120px;
  margin: 1rem auto;

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    border: 0;
    padding: 0.8rem;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme["green-300"]};
    cursor: pointer;
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${(props) => props.theme["green-500"]};
      border-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }

  input {
    flex: 1;
    border-radius: 6px;
    border: 0px;
    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }
`;
