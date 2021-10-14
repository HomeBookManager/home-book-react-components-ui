import { FC, MouseEvent, ReactNode, useEffect, useState } from 'react';
import { History } from 'history';

// others
import { className as buttonClassName, error, Size } from './constants';

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
  forcedHover = false,
  history,
  href = '',
  onClick,
  size = Size.medium,
  style = {},
}) => {
  const [pulseElements, setPulseElements] = useState([]);
  const PulseElement = () => <span className={`${buttonClassName}__pulse`} />;

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setPulseElements([...pulseElements, PulseElement]);

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
      buttonClassName,
      className,
      `${buttonClassName}__${size}`,
      `${forcedHover ? `${buttonClassName}__forced-hover` : ''}`,
    ]
      .filter((className) => className)
      .join(' ');

  useEffect(() => {
    if (pulseElements.length) {
      const timer = setTimeout(() => {
        setPulseElements([]);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [pulseElements]);

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
      <div className={`${buttonClassName}__children`}>{children}</div>
      {pulseElements.map((PulseElement, key) => (
        <PulseElement key={key} />
      ))}
    </button>
  );
};

export default ButtonIcon;
