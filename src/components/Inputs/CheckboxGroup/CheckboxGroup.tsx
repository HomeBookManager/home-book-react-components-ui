import {
  ChangeEvent,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useCallback,
  useMemo,
  useState,
} from 'react';

// components
import Checkbox, { TProps as TCheckboxProps } from '../Checkbox/Checkbox';

// others
import Indeterminate from '../../../assets/icons/indeterminate.svg';

// services
import { getCheckedGroupInitialValue } from './services';
import getStyleClassNames from '../../../services/getStyleClassNames';

export const checkboxGroupClassName = 'CheckboxGroup';

export type TProps = Pick<
  TCheckboxProps,
  | 'className'
  | 'checkedIcon'
  | 'disabled'
  | 'disablePulseEffect'
  | 'forcedFocus'
  | 'forcedHover'
  | 'label'
  | 'onChange'
  | 'size'
  | 'style'
  | 'uncheckedIcon'
> & {
  checked?: boolean;
  children: ReactElement<TCheckboxProps> | Array<ReactElement<TCheckboxProps>>;
  indeterminateIcon?: string;
};

export const CheckboxGroup: FC<TProps> = ({
  checked: controledChecked = false,
  checkedIcon = '',
  children,
  className = '',
  label = '',
  indeterminateIcon = '',
  onChange = null,
  style = {},
  uncheckedIcon = '',
  ...restProps
}) => {
  const classNames = [`${checkboxGroupClassName}`, `${className}`];
  const [checked, setChecked] = useState(false);
  const [checkedGroup, setCheckedGroup] = useState(
    getCheckedGroupInitialValue(children, controledChecked)
  );
  const checkboxProps: TCheckboxProps = useMemo(
    () => ({
      checkedGroup,
      checkedIcon,
      setCheckedGroup: (value: boolean, index: number): void =>
        setCheckedGroup(
          checkedGroup.map((checked, i) => (i === index ? value : checked))
        ),
      uncheckedIcon,
      ...restProps,
    }),
    [checkedGroup]
  );

  const getUncheckedIcon = useCallback(
    () =>
      checkedGroup.some((checked) => checked)
        ? indeterminateIcon || Indeterminate
        : uncheckedIcon || '',
    [checkedGroup]
  );

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    const {
      currentTarget: { checked },
    } = event;

    if (checked) {
      setCheckedGroup(checkedGroup.map(() => true));
    } else {
      setCheckedGroup(checkedGroup.map(() => false));
    }

    if (onChange) {
      onChange(event);
    }

    setChecked(checked);
  };

  useEffect(() => {
    const allChecked = checkedGroup.every((checked) => checked);

    if (allChecked && !checked) {
      setChecked(true);
    } else if (!allChecked && checked) {
      setChecked(false);
    }
  }, [checkedGroup]);

  return (
    <div className={getStyleClassNames(classNames)} style={style}>
      <Checkbox
        checked={checked}
        checkedIcon={checkedIcon}
        label={label}
        onChange={onChangeHandler}
        uncheckedIcon={getUncheckedIcon()}
        {...restProps}
      />
      <div className={`${checkboxGroupClassName}__inputs`}>
        {Array.isArray(children)
          ? children.map((children, index) =>
              cloneElement(children as ReactElement, {
                ...(children as ReactElement)?.props,
                ...checkboxProps,
                index,
                checked: checkedGroup[index],
                key: index,
              })
            )
          : cloneElement(children, {
              ...children.props,
              ...checkboxProps,
              index: 0,
              checked: checkedGroup[0],
            })}
      </div>
    </div>
  );
};

export default CheckboxGroup;
