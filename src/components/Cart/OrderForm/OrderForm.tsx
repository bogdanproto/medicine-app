import { yupResolver } from '@hookform/resolvers/yup';
import {
  AddressInput,
  ButtonForm,
  ErrorInputForm,
  InputForm,
} from 'components/common';
import { schemaOrderForm } from 'const';
import { useForm } from 'react-hook-form';
import { OrderFormContainer, TotalBox } from './OrderForm.styled';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import {
  selectCart,
  selectTotalCart,
} from 'services/redux/dataSlice/selectors';
import { TotalText } from '../CartList/CartList.styled';
import { createOrder } from 'services/redux/dataSlice/operations';
import { useEffect } from 'react';
import { ICoordinates } from 'interfaces';

interface OrderFormProps {
  isLoaded: boolean;
  mapAddress: string;
  getCoordinates: (coordinates: ICoordinates) => void;
}

export const OrderForm: React.FC<OrderFormProps> = ({
  isLoaded,
  getCoordinates,
  mapAddress,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitSuccessful, errors },
  } = useForm({
    resolver: yupResolver(schemaOrderForm),
  });

  const dispatch = useTypeDispatch();

  const cart = useTypeSelector(selectCart);
  const totalPrice = useTypeSelector(selectTotalCart);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = (data: any) => {
    dispatch(createOrder({ ...data, products: cart, totalPrice }));
  };

  return (
    <>
      {cart.length > 0 && (
        <OrderFormContainer onSubmit={handleSubmit(onSubmit)}>
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
            <AddressInput
              register={register('address')}
              isLoaded={isLoaded}
              placeholder="Address"
              getCoordinates={getCoordinates}
              mapAddress={mapAddress}
            />
            <ErrorInputForm>{errors.address?.message}</ErrorInputForm>
          </div>
          <TotalBox>
            <TotalText>{`Total price: ${totalPrice}$`}</TotalText>
            <ButtonForm disabled={!totalPrice} type="submit">
              Submit
            </ButtonForm>
          </TotalBox>
        </OrderFormContainer>
      )}
    </>
  );
};
