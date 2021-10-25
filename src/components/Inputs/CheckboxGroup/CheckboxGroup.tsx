import {
  ChangeEvent,
  cloneElement,
  FC,
  ReactElement,
  useEffect,
  useMemo,
  useState,
} from 'react';

// components
import Checkbox, { TProps as TCheckboxProps } from '../Checkbox/Checkbox';

// others
import Indeterminate from '../../../assets/icons/indeterminate.svg';

// styles
import './checkbox-group.scss';
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
  | 'size'
  | 'uncheckedIcon'
> & {
  checked?: boolean;
  children: Array<ReactElement>;
};

export const CheckboxGroup: FC<TProps> = ({
  checked: controledChecked = false,
  children,
  className = '',
  label = '',
  ...restProps
}) => {
  const classNames = [`${checkboxGroupClassName}`, `${className}`];
  const [checked, setChecked] = useState(false);
  const [checkedGroup, setCheckedGroup] = useState(
    children.map(
      ({ props: { checked } }: { props: TCheckboxProps }) =>
        controledChecked || checked
    )
  );
  const uncheckedIcon = useMemo(
    () => (checkedGroup.some((checked) => checked) ? Indeterminate : ''),
    [checkedGroup]
  );
  const checkboxProps: TCheckboxProps = useMemo(
    () => ({
      checkedGroup,
      setCheckedGroup: (value: boolean, index: number): void =>
        setCheckedGroup(
          checkedGroup.map((checked, i) => (i === index ? value : checked))
        ),
      ...restProps,
    }),
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
    <div className={getStyleClassNames(classNames)}>
      <Checkbox
        checked={checked}
        label={label}
        onChange={onChangeHandler}
        uncheckedIcon={uncheckedIcon}
        {...restProps}
      />
      <div className={`${checkboxGroupClassName}__inputs`}>
        {children.map((children, index) =>
          cloneElement(children, {
            ...children.props,
            ...checkboxProps,
            index,
            checked: checkedGroup[index],
            key: index,
          })
        )}
      </div>
    </div>
  );
};

export default CheckboxGroup;
