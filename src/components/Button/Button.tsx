import { FC, MouseEvent, ReactNode } from 'react';

// hooks
import { useRippleEffect } from './hooks/useRippleEffect';

// others
import { className, Variant } from './constants';

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
  const { clickHandler: clickHandlerRipple, component: Component } =
    useRippleEffect('Button__ripple');
  const styleClassNames = [className, `${className}__${variant}`];

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    clickHandlerRipple(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button className={styleClassNames.join(' ')} onClick={onClickHandler}>
      {children}
      {Component && <Component />}
    </button>
  );
};

export default Button;
