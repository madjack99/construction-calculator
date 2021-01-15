import React from 'react';

import { ErrorDiv } from '../styles/customElements';

interface IErrorMessage {
  children: string;
}

const ErrorMessage = ({ children }: IErrorMessage) => {
  return <ErrorDiv>{children}</ErrorDiv>;
};

export default ErrorMessage;
