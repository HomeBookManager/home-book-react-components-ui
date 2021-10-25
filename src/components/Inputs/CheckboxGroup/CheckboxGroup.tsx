import { FC, ReactElement } from 'react';

export type TProps = {
  children: ReactElement | Array<ReactElement>;
};

export const CheckboxGroup: FC<TProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default CheckboxGroup;
