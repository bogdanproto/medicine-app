import { yupResolver } from '@hookform/resolvers/yup';
import {
  ButtonForm,
  ErrorInputForm,
  FormContainer,
  InputForm,
} from 'components/common';
import { schemaOrderForm } from 'const';
import { useForm } from 'react-hook-form';

export const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaOrderForm),
  });

  const onSubmit = (data: any) => {
    console.log(data);
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
        <InputForm placeholder="Phone" {...register('phone')} />
        <ErrorInputForm>{errors.phone?.message}</ErrorInputForm>
      </div>

      <div>
        <InputForm placeholder="Address" {...register('address')} />
        <ErrorInputForm>{errors.address?.message}</ErrorInputForm>
      </div>

      <ButtonForm type="submit">Submit</ButtonForm>
    </FormContainer>
  );
};
