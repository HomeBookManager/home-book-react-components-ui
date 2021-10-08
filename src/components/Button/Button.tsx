import { FC, MouseEvent, ReactNode } from 'react';

// hooks
import { useRippleEffect } from './hooks/useRippleEffect';

// others
import { Variant } from './constants';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: Variant;
};

export const Button: FC<TProps> = ({
  children,
  onClick,
  variant = Variant.default,
}) => {
  const rippleEffect = useRippleEffect('Button__ripple');
  const className = 'Button';
  const styleClassNames = [className, `${className}__${variant}`];

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    rippleEffect(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={styleClassNames.join(' ')} onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default Button;
