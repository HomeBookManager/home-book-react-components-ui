import { FC, MouseEvent, ReactNode, useState } from 'react';
import { History } from 'history';

// components
import CirclePulse from '../../../shared/CirclePulse/CirclePulse';

// others
import { className as buttonIconClassName, Size } from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';
import getRandomKey from '../../../services/getRandomKey';
import handleNavigation from '../../../services/navigation/handleNavigation';

// styles
import './button-icon.scss';

export type TProps = {
  children?: ReactNode | string;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  externalLink?: boolean;
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
  externalLink = false,
  forcedHover = false,
  history,
  href = '',
  onClick,
  size = Size.medium,
  style = {},
}) => {
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const classNames = [
    buttonIconClassName,
    className,
    `${buttonIconClassName}__${size}`,
    `${forcedHover ? `${buttonIconClassName}__forced-hover` : ''}`,
  ];

  const onClickHandler = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disablePulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
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
      {children}
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
