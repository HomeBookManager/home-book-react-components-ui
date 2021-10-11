import { FC, MouseEvent, ReactNode } from 'react';

// hooks
import {
  className as rippleClassName,
  useRippleEffect,
} from './hooks/useRippleEffect';

// others
import { className, Color, Size, Variant } from './constants';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  color?: Color;
  disabled?: boolean;
  endIcon?: string;
  forcedHover?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  startIcon?: string;
  variant?: Variant;
};

export const Button: FC<TProps> = ({
  children,
  color = Color.primary,
  disabled = false,
  endIcon,
  forcedHover = false,
  onClick,
  size = Size.medium,
  startIcon,
  variant = Variant.default,
}) => {
  const styleClassNames = [
    className,
    `${className}__${size}`,
    `${className}__${variant}`,
    `${className}__${variant}--${color}`,
    `${className}__${variant}--${color}${forcedHover ? '-forced-hover' : ''}`,
  ];
  const iconStyleClassNames = [
    `${className}__icon`,
    `${className}__icon--${size}`,
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
      {startIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames.join(
            ' '
          )} ${className}__icon--start`}
          src={startIcon}
        />
      )}
      {children}
      {endIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames.join(' ')} ${className}__icon--end`}
          src={endIcon}
        />
      )}
      {Component && <Component />}
    </button>
  );
};

export default Button;
