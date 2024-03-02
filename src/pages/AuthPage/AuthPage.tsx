import { useState } from 'react';
import { AuthPageContainer } from './AuthPage.styled';
import { FormType } from 'interfaces/form/authForm';
import { LoginForm, SignUpForm, SwitchForm } from 'components/Auth';
import { Logo } from 'components/common';

export const AuthPage = () => {
  const [typeForm, setTypeForm] = useState(FormType.Login);

  const handleSwitch = (type: FormType) => {
    setTypeForm(type);
  };

  return (
    <AuthPageContainer>
      <Logo />
      <SwitchForm handleSwitch={handleSwitch} typeForm={typeForm} />
      {typeForm === FormType.Login ? <LoginForm /> : <SignUpForm />}
    </AuthPageContainer>
  );
};
