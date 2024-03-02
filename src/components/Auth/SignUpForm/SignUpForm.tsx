import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { schemaSignupForm } from 'const';
import { IUserLogin } from 'interfaces';

import {
  ButtonForm,
  ErrorInputForm,
  FormContainer,
  InputForm,
} from 'components/common';
import { signUpUser } from 'services/redux/authSlice/operations';

export const SignUpForm = () => {
  const dispatch = useTypeDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSignupForm),
  });

  const onSubmit = (data: IUserLogin) => {
    dispatch(signUpUser(data));
  };

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <div>
        <InputForm placeholder="Name" {...register('name')} />
        <ErrorInputForm>{errors.name?.message}</ErrorInputForm>
      </div>

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

      <ButtonForm type="submit">Sign Up</ButtonForm>
    </FormContainer>
  );
};
