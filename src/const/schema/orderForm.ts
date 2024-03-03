import * as yup from 'yup';

export const schemaOrderForm = yup.object({
  name: yup.string().required('Name is required').trim(),
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  phone: yup.string().required('Phone is required').trim(),
  address: yup.string().required('Address is required').trim(),
});
