import styled from 'styled-components';

export const InputForm = styled.input`
  width: 100%;
  height: 36px;
  box-sizing: border-box;

  padding-left: 8px;

  border: 1px solid ${({ theme }) => theme.colorInputBorder};
  box-shadow: ${({ theme }) => theme.shadowInput};
  border-radius: 6px;

  color: ${({ theme }) => theme.colorInputText};

  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    border: 1px solid ${({ theme }) => theme.colorActive};
  }
`;
