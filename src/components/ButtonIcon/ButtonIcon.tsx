import { FC, MouseEvent, ReactNode, useState } from 'react';
import { History } from 'history';

// components
import CirclePulse from '../../shared/CirclePulse/CirclePulse';

// others
import { className as buttonIconClassName, error, Size } from './constants';

// services
import getRandomKey from '../../services/getRandomKey';

// styles
import './button-icon.scss';

export type TProps = {
  children?: ReactNode | string;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  forcedHover?: boolean;
  history?: History;
  href?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  size?: Size;
  style?: { [key: string]: number | string };
};

export const ButtonIcon: FC<TProps> = ({
  children,
  className = '',
  disabled = false,
  disablePulseEffect = false,
  forcedHover = false,
  history,
  href = '',
  onClick,
  size = Size.medium,
  style = {},
}) => {
  const [pulseElements, setPulseElements] = useState([]);

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disablePulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
    }

    if (onClick) {
      onClick(event);
    }

    if (href) {
      // @ts-ignore
      history.push(href);
    }
  };

  const getStyleClassNames = (): string =>
    [
      buttonIconClassName,
      className,
      `${buttonIconClassName}__${size}`,
      `${forcedHover ? `${buttonIconClassName}__forced-hover` : ''}`,
    ]
      .filter((className) => className)
      .join(' ');

  if (href && !history) {
    throw error;
  }

  return (
    <button
      className={getStyleClassNames()}
      disabled={disabled}
      onClick={onClickHandler}
      style={style}
    >
      <div>{children}</div>
      {pulseElements.map((key) => (
        <CirclePulse
          animationDuration={1000}
          className={`${buttonIconClassName}__circle-pulse ${buttonIconClassName}__circle-pulse--${size}`}
          pulseElements={pulseElements}
          setPulseElements={setPulseElements}
          key={key}
        />
      ))}
    </button>
  );
};

export default ButtonIcon;
