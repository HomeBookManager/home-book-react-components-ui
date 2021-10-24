import { ChangeEvent, FC, useRef, useState } from 'react';
import { ReactSVG } from 'react-svg';

// others
import Check from '../../../assets/icons/check.svg';
import { className as checkboxClassName } from './constants';

// services
import getStyleClassNames from '../../../services/getStyleClassNames';

// styles
import './checkbox.scss';

export type TProps = {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  forcedFocus?: boolean;
  forcedHover?: boolean;
  label?: string;
};

export const Checkbox: FC<TProps> = ({
  checked: initialChecked = false,
  className = '',
  disabled = false,
  forcedFocus,
  forcedHover = false,
  label = '',
}) => {
  const [checked, setChecked] = useState(initialChecked);
  const inputRef = useRef<HTMLInputElement>(null);
  const classNames = [checkboxClassName, className];
  const inputClassNames = [
    `${checkboxClassName}__input`,
    `${forcedFocus ? `${checkboxClassName}__input-forced-focus` : ''}`,
    `${forcedHover ? `${checkboxClassName}__input-forced-hover` : ''}`,
  ];

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { checked },
    } = event;

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
      <div className={`${checkboxClassName}__icon-wrapper`}>
        <div className={`${checkboxClassName}__rectangle`} />
        <ReactSVG className={`${checkboxClassName}__icon`} src={Check} />
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
