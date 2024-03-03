import * as yup from 'yup';

export const schemaOrderForm = yup.object({
  name: yup.string().required('Name is required').trim(),
  email: yup
    .string()
    .email('Email must be a valid')
    .required('Email is required')
    .trim(),
  phone: yup
    .string()
    .required('Phone is required')
    .trim()
    .matches(/^\+?[0-9]{6,14}$/, 'Phone number must be more than 6 digits'),
  address: yup.string().required('Address is required').trim(),
});
