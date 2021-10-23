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
  className?: string;
  disabled?: boolean;
};

export const Checkbox: FC<TProps> = ({ className = '', disabled = false }) => {
  const [checked, setChecked] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const classNames = [checkboxClassName, className];

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
        className={`${checkboxClassName}__input`}
        disabled={disabled}
        onChange={onChangeHandler}
        ref={inputRef}
        type="checkbox"
      />
      <div className={`${checkboxClassName}__icon-wrapper`}>
        <div className={`${checkboxClassName}__rectangle`} />
        <ReactSVG className={`${checkboxClassName}__icon`} src={Check} />
      </div>
      <span
        className={`${checkboxClassName}__label`}
        onClick={() => !disabled && inputRef.current?.click()}
      >
        Label
      </span>
    </div>
  );
};

export default Checkbox;
