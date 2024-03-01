import { errorMessage } from 'const';
import { IErorr } from 'interfaces/error/errorInterface';

export const handleErrors = (error: IErorr): string =>
  errorMessage[error.code] || errorMessage.common_auth_error;
