import { FC, MouseEvent, ReactNode } from 'react';

// hooks
import {
  className as rippleClassName,
  useRippleEffect,
} from './hooks/useRippleEffect';

// others
import { className, Color, Variant } from './constants';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  color?: Color;
  disabled?: boolean;
  forcedHover?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  variant?: Variant;
};

export const Button: FC<TProps> = ({
  children,
  color = Color.primary,
  disabled = false,
  forcedHover = false,
  onClick,
  variant = Variant.default,
}) => {
  const styleClassNames = [
    className,
    `${className}__${variant}`,
    `${className}__${variant}--${color}`,
    `${className}__${variant}--${color}${forcedHover ? '-forced-hover' : ''}`,
  ];
  const { clickHandler: clickHandlerRipple, component: Component } =
    useRippleEffect(`${className}__${variant}--${color}__${rippleClassName}`);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    clickHandlerRipple(event);

    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      className={styleClassNames.join(' ')}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {children}
      {Component && <Component />}
    </button>
  );
};

export default Button;
