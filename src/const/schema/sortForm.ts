import * as yup from 'yup';

export const schemaSortForm = yup.object({
  price: yup.string(),
  createdAt: yup.string(),
});
