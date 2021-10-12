import { FC, MouseEvent, ReactNode } from 'react';
import { History } from 'history';

// hooks
import {
  className as rippleClassName,
  useRippleEffect,
} from './hooks/useRippleEffect';

// others
import { className, Color, Size, Variant } from './constants';

// styles
import './button.scss';

const error = `
  You have to pass history hook from react-router-dom
  const history = useHistory();
  <Button history={history}></Button>
`;

export type TProps = {
  children?: ReactNode | string;
  classes?: string;
  color?: Color;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  endIcon?: string;
  forcedHover?: boolean;
  fullWidth?: boolean;
  history?: History;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  startIcon?: string;
  style?: { [key: string]: number | string };
  variant?: Variant;
};

export const Button: FC<TProps> = ({
  children,
  classes = '',
  color = Color.primary,
  disabled = false,
  disableRippleEffect = false,
  endIcon,
  forcedHover = false,
  fullWidth = false,
  history,
  href = '',
  onClick,
  size = Size.medium,
  startIcon,
  style = {},
  variant = Variant.default,
}) => {
  const iconStyleClassNames = `${className}__icon ${className}__icon--${size}`;
  const { clickHandler: clickHandlerRipple, component: Component } =
    useRippleEffect(`${className}__${variant}--${color}__${rippleClassName}`);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disableRippleEffect) {
      clickHandlerRipple(event);
    }

    if (onClick) {
      onClick(event);
    }

    if (href) {
      if (!history) {
        throw error;
      }
      history.push(href);
    }
  };

  const getStyleClassNames = (): string =>
    [
      className,
      classes,
      `${fullWidth ? `${className}__full-width` : ''}`,
      `${className}__${size}`,
      `${className}__${variant}`,
      `${className}__${variant}--${color}`,
      `${className}__${variant}--${color}${forcedHover ? '-forced-hover' : ''}`,
    ]
      .filter((className) => className)
      .join(' ');

  return (
    <button
      className={getStyleClassNames()}
      disabled={disabled}
      onClick={onClickHandler}
      style={style}
    >
      {startIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames} ${className}__icon--start`}
          src={startIcon}
        />
      )}
      {children}
      {endIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames} ${className}__icon--end`}
          src={endIcon}
        />
      )}
      {Component && <Component />}
    </button>
  );
};

export default Button;
