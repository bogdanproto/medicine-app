import { useForm } from 'react-hook-form';
import { Select } from '../Select/Select';
import { SortBarContainer } from './SortBar.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { Button } from '../Button/Button.styled';
import { schemaSortForm, sortOptions } from 'const';
import { selectSortObj } from 'services/redux/dataSlice/selectors';
import { setSortProps } from 'services/redux/dataSlice/slice/dataSlice';

export const SortBar = () => {
  const { price, createdAt } = useTypeSelector(selectSortObj);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      price,
      createdAt,
    },
    resolver: yupResolver(schemaSortForm),
  });

  const dispatch = useTypeDispatch();

  const onSubmit = (data: any) => {
    if (JSON.stringify({ price, createdAt }) === JSON.stringify(data)) {
      return;
    }
    dispatch(setSortProps(data));
  };

  return (
    <SortBarContainer onSubmit={handleSubmit(onSubmit)}>
      <Select
        label="Price"
        placeholder=""
        options={sortOptions}
        register={register('price')}
      />

      <Select
        label="Date"
        placeholder=""
        options={sortOptions}
        register={register('createdAt')}
      />

      <Button type="submit">Sort</Button>
    </SortBarContainer>
  );
};
