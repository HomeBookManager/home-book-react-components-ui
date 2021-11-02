import { ReactElement } from 'react';

import { TProps as TCheckboxProps } from '../Checkbox/Checkbox';

export const getCheckedGroupInitialValue = (
  children: ReactElement<TCheckboxProps> | Array<ReactElement<TCheckboxProps>>,
  controledChecked: boolean
): Array<boolean> =>
  Array.isArray(children)
    ? children.map(
        ({ props: { checked = false } }: { props: TCheckboxProps }) =>
          controledChecked || checked
      )
    : [children.props.checked || false];
