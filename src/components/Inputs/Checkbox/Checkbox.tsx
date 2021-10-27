import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
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
  checkedGroup?: Array<boolean | undefined>;
  checkedIcon?: string;
  className?: string;
  disabled?: boolean;
  disablePulseEffect?: boolean;
  forcedFocus?: boolean;
  forcedHover?: boolean;
  index?: number;
  label?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  setCheckedGroup?: (value: boolean, index: number) => void;
  size?: Size;
  style?: { [key: string]: number | string };
  uncheckedIcon?: string;
};

export const Checkbox: FC<TProps> = ({
  checked: controledChecked = false,
  checkedGroup,
  checkedIcon = '',
  className = '',
  disabled = false,
  disablePulseEffect = false,
  forcedFocus = false,
  forcedHover = false,
  index = 0,
  label = '',
  onChange = null,
  setCheckedGroup = null,
  size = Size.medium,
  style = {},
  uncheckedIcon = '',
}) => {
  const [pulseElements, setPulseElements] = useState<Array<string>>([]);
  const [checked, setChecked] = useState(
    checkedGroup ? checkedGroup[index] : controledChecked
  );
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

  console.log(checkedIcon, uncheckedIcon);

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
      setCheckedGroup(checked, index);
    }

    setChecked(checked);
  };

  useEffect(() => {
    setChecked(controledChecked);
  }, [controledChecked]);

  return (
    <div className={getStyleClassNames(classNames)} style={style}>
      <input
        checked={checked}
        className={getStyleClassNames(inputClassNames)}
        data-testid="input"
        disabled={disabled}
        onChange={onChangeHandler}
        ref={inputRef}
        type="checkbox"
      />
      <div className={getStyleClassNames(iconWrapperClassNames)}>
        {!checked && (
          <ReactSVG
            className={
              uncheckedIcon ? '' : `${checkboxClassName}__unchecked-icon`
            }
            src={uncheckedIcon ? uncheckedIcon : Uncheck}
          />
        )}
        {checked && (
          <ReactSVG
            className={checkedIcon ? '' : `${checkboxClassName}__checked-icon`}
            src={checkedIcon ? checkedIcon : Check}
          />
        )}

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
          {label}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
