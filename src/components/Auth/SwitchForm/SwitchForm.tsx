import React from 'react';
import { FormType } from 'interfaces/form/authForm';
import { SwitchFormStyled } from './SwitchForm.styled';
import { SwitchButton } from './SwitchButton.styled';

interface SwitchFormProps {
  typeForm: FormType;
  handleSwitch: (type: FormType) => void;
}

export const SwitchForm: React.FC<SwitchFormProps> = ({
  handleSwitch,
  typeForm,
}) => {
  return (
    <SwitchFormStyled>
      <SwitchButton
        onClick={() => handleSwitch(FormType.Login)}
        $isActive={FormType.Login === typeForm}
      >
        {FormType.Login}
      </SwitchButton>
      <SwitchButton
        onClick={() => handleSwitch(FormType.SignUp)}
        $isActive={FormType.SignUp === typeForm}
      >
        {FormType.SignUp}
      </SwitchButton>
    </SwitchFormStyled>
  );
};
