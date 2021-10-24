import { ChangeEvent, FC, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

// components
import CirclePulse from '../../../shared/CirclePulse/CirclePulse';

// others
import Check from '../../../assets/icons/check.svg';
import { className as checkboxClassName, Size } from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';
import getRandomKey from '../../../services/getRandomKey';

// styles
import './checkbox.scss';

export type TProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  forcedFocus?: boolean;
  forcedHover?: boolean;
  label?: string;
  size?: Size;
};

export const Checkbox: FC<TProps> = ({
  checked: initialChecked = false,
  className = '',
  disabled = false,
  disablePulseEffect = false,
  forcedFocus,
  forcedHover = false,
  label = '',
  size = Size.medium,
}) => {
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const [checked, setChecked] = useState(initialChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const classNames = [checkboxClassName, className];
  const inputClassNames = [
    `${checkboxClassName}__input`,
    `${forcedFocus ? `${checkboxClassName}__input-forced-focus` : ''}`,
    `${forcedHover ? `${checkboxClassName}__input-forced-hover` : ''}`,
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

    setChecked(checked);
  };

  return (
    <div className={getStyleClassNames(classNames)}>
      <input
        checked={checked}
        className={getStyleClassNames(inputClassNames)}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={inputRef}
        type="checkbox"
      />
      <div className={getStyleClassNames(iconWrapperClassNames)}>
        <div className={`${checkboxClassName}__rectangle`} />
        <ReactSVG className={`${checkboxClassName}__icon`} src={Check} />

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
