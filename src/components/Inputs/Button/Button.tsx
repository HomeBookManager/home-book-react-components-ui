import { FC, MouseEvent, ReactNode } from 'react';
import { History } from 'history';

// hooks
import {
  className as rippleClassName,
  useRippleEffect,
} from './hooks/useRippleEffect';

// others
import {
  className as buttonClassName,
  Color,
  Size,
  Variant,
} from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';
import handleNavigation from '../../../services/navigation/handleNavigation';

// styles
import './button.scss';

export type TProps = {
  children?: ReactNode | string;
  className?: string;
  color?: Color;
  disabled?: boolean;
  disableRippleEffect?: boolean;
  endIcon?: string;
  externalLink?: boolean;
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
  className = '',
  color = Color.primary,
  disabled = false,
  disableRippleEffect = false,
  endIcon,
  externalLink = false,
  forcedHover = false,
  fullWidth = false,
  history,
  href = '',
  onClick,
  size = Size.medium,
  startIcon,
  style = {},
  variant = Variant.contained,
}) => {
  const iconStyleClassNames = `${buttonClassName}__icon ${buttonClassName}__icon--${size}`;
  const { clickHandler: clickHandlerRipple, component: Component } =
    useRippleEffect(
      `${buttonClassName}__${variant}--${color}__${rippleClassName}`
    );
  const classNames = [
    buttonClassName,
    className,
    `${fullWidth ? `${buttonClassName}__full-width` : ''}`,
    `${buttonClassName}__${size}`,
    `${buttonClassName}__${variant}`,
    `${buttonClassName}__${variant}--${color}`,
    `${
      forcedHover ? `${buttonClassName}__${variant}--${color}-forced-hover` : ''
    }`,
  ];

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disableRippleEffect) {
      clickHandlerRipple(event);
    }

    if (onClick) {
      onClick(event);
    }

    if (href) {
      handleNavigation(href, externalLink, history);
    }
  };

  return (
    <button
      className={getStyleClassNames(classNames)}
      disabled={disabled}
      onClick={onClickHandler}
      style={style}
    >
      {startIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames} ${buttonClassName}__icon--start`}
          src={startIcon}
        />
      )}
      {children}
      {endIcon && (
        <img
          alt="icon"
          className={`${iconStyleClassNames} ${buttonClassName}__icon--end`}
          src={endIcon}
        />
      )}
      {Component && <Component />}
    </button>
  );
};

export default Button;
