import { FC, MouseEvent, ReactNode } from 'react';
// hooks
import { useRippleEffect } from './hooks/useRippleEffect';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const Button: FC<TProps> = ({ children, onClick }) => {
  const rippleEffect = useRippleEffect('Button__ripple');

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    rippleEffect(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className="Button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
