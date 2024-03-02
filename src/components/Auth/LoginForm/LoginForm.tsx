import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { schemaLoginForm } from 'const';
import { IUserLogin } from 'interfaces';

import {
  ButtonForm,
  ErrorInputForm,
  FormContainer,
  InputForm,
} from 'components/common';
import { logInUser } from 'services/redux/authSlice/operations';

export const LoginForm = () => {
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaLoginForm),
  });

  const onSubmit = (data: IUserLogin) => {
    dispatch(logInUser(data));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputForm placeholder="Email" {...register('email')} />
        <ErrorInputForm>{errors.email?.message}</ErrorInputForm>
      </div>

      <div>
        <InputForm
          placeholder="Password"
          {...register('password')}
          type="password"
        />
        <ErrorInputForm>{errors.password?.message}</ErrorInputForm>
      </div>

      <ButtonForm type="submit">Login</ButtonForm>
    </FormContainer>
  );
};
