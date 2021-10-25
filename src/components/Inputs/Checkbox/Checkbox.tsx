import { ChangeEvent, FC, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

// components
import CirclePulse from '../../../shared/CirclePulse/CirclePulse';

// others
import Check from '../../../assets/icons/check.svg';
import Uncheck from '../../../assets/icons/uncheck.svg';
import { className as checkboxClassName, Size } from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';
import getRandomKey from '../../../services/getRandomKey';

// styles
import './checkbox.scss';

export type TProps = {
  checked?: boolean;
  checkIcon?: string;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  forcedFocus?: boolean;
  forcedHover?: boolean;
  index?: number;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  setCheckedGroup?: (index: number) => void;
  size?: Size;
  style?: { [key: string]: number | string };
  uncheckIcon?: string;
};

export const Checkbox: FC<TProps> = ({
  checked: initialChecked = false,
  checkIcon = '',
  className = '',
  disabled = false,
  disablePulseEffect = false,
  forcedFocus,
  forcedHover = false,
  index = 0,
  label = '',
  onChange = null,
  setCheckedGroup = null,
  size = Size.medium,
  style = {},
  uncheckIcon = '',
}) => {
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const [checked, setChecked] = useState(initialChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const classNames = [checkboxClassName, className];
  const inputClassNames = [
    `${checkboxClassName}__input`,
    `${forcedFocus ? `${checkboxClassName}__input-forced-focus` : ''}`,
    `${forcedHover ? `${checkboxClassName}__input-forced-hover` : ''}`,
    `${checkboxClassName}__input--${size}`,
  ];
  const iconWrapperClassNames = [
    `${checkboxClassName}__icon-wrapper`,
    `${checkboxClassName}__icon-wrapper--${size}`,
  ];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { checked },
    } = event;

    if (!disablePulseEffect) {
      setPulseElements([...pulseElements, getRandomKey(pulseElements)]);
    }

    if (onChange) {
      onChange(event);
    }

    if (setCheckedGroup) {
      setCheckedGroup(index);
    }

    setChecked(checked);
  };

  return (
    <div className={getStyleClassNames(classNames)} style={style}>
      <input
        checked={checked}
        className={getStyleClassNames(inputClassNames)}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={inputRef}
        type="checkbox"
      />
      <div className={getStyleClassNames(iconWrapperClassNames)}>
        <ReactSVG
          className={`${checkboxClassName}__unchecked-icon`}
          src={uncheckIcon ? uncheckIcon : Uncheck}
        />
        <ReactSVG
          className={`${checkboxClassName}__checked-icon`}
          src={checkIcon ? checkIcon : Check}
        />

        {pulseElements.map((key) => (
          <CirclePulse
            animationDuration={1000}
            className={`${checkboxClassName}__circle-pulse`}
            pulseElements={pulseElements}
            setPulseElements={setPulseElements}
            key={key}
          />
        ))}
      </div>
      {label && (
        <span
          className={`${checkboxClassName}__label`}
          onClick={() => !disabled && inputRef.current?.click()}
        >
          Label
        </span>
      )}
    </div>
  );
};

export default Checkbox;
