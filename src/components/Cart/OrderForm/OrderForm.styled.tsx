import { FormContainer } from 'components/common';
import styled from 'styled-components';

export const OrderFormContainer = styled(FormContainer)`
  width: 440px;
  height: 380px;

  align-items: flex-end;

  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colorSubText};
  border-radius: 0 8px 8px 0;

  button {
    width: 140px;
  }
`;
export const TotalBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;

  margin-top: 102px;
`;
