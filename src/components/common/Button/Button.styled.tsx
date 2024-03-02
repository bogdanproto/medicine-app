import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;

  padding: 8px 16px;

  background-color: ${({ theme }) => theme.colorButton};
  color: ${({ theme }) => theme.colorButtonText};
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;

  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  transition: all ${({ theme }) => theme.cubicTransition};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colorActive};
  }
`;
