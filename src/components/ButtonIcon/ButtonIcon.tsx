import { FC, MouseEvent, ReactNode, useEffect, useState, useRef } from 'react';
import { History } from 'history';

// others
import { className as buttonClassName, error, Size } from './constants';

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

function timer(callback, delay) {
  let id,
    started,
    remaining = delay,
    running;

  this.start = function () {
    running = true;
    started = new Date();
    id = setTimeout(callback, remaining);
  };

  this.pause = function () {
    running = false;
    clearTimeout(id);
    // @ts-ignore
    remaining -= new Date() - started;
  };

  this.getTimeLeft = function () {
    if (running) {
      this.pause();
      this.start();
    }

    return remaining;
  };

  this.getStateRunning = function () {
    return running;
  };

  this.start();
}

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

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    setPulseElements([...pulseElements, getRandomKey(pulseElements)]);

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
      {pulseElements.map((key) => (
        <PulseElement
          pulseElements={pulseElements}
          setPulseElements={setPulseElements}
          key={key}
        />
      ))}
    </button>
  );
};

const PulseElement = ({ pulseElements, setPulseElements }) => {
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = new timer(function () {}, 1000);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPulseElements(pulseElements.slice(1));
      // @ts-ignore
    }, [timerRef.current.getTimeLeft()]);

    return () => {
      clearTimeout(timer);
    };
  }, [pulseElements]);

  return <span className={`${buttonClassName}__pulse`} />;
};

export default ButtonIcon;
