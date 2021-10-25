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

export type TProps = {
  checked?: boolean;
  children: Array<ReactElement>;
};

export const CheckboxGroup: FC<TProps> = ({
  checked: controledChecked = false,
  children,
}) => {
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
      setCheckedGroup: (value: boolean, index: number) =>
        setCheckedGroup(
          checkedGroup.map((checked, i) => (i === index ? value : checked))
        ),
      checkedGroup,
    }),
    [checkedGroup]
  );

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <Checkbox
        checked={checked}
        label="Parent"
        onChange={onChangeHandler}
        uncheckedIcon={uncheckedIcon}
      />
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
  );
};

export default CheckboxGroup;
