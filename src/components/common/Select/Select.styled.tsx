import styled from 'styled-components';

export const SelectStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  label {
    font-size: 12px;
    font-weight: bold;
    line-height: 28px;

    color: ${({ theme }) => theme.colorLabel};
  }

  select {
    width: fit-content;
    height: 28px;
    box-sizing: border-box;

    padding: 2px;

    font-size: 12px;

    border: 1px solid ${({ theme }) => theme.colorInputBorder};
    box-shadow: ${({ theme }) => theme.shadowInput};
    border-radius: 8px;
    outline: none;

    background-color: ${({ theme }) => theme.colorInputBackgroud};
    color: ${({ theme }) => theme.colorInputText};

    transition: all ${({ theme }) => theme.cubicTransition};
  }
`;
