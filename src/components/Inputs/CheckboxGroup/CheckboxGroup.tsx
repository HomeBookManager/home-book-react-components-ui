import { FC, ReactElement, useMemo, useState } from 'react';

// services
import getChildrenLength from '../../../services/react-children/getChildrenLength';
import getChildrenWithForwardedProps from '../../../services/react-children/getChildrenWithForwardedProps';

export type TProps = {
  children: ReactElement | Array<ReactElement>;
};

export const CheckboxGroup: FC<TProps> = ({ children }) => {
  const [checkedGroup, setCheckedGroup] = useState(
    Array.from(Array(getChildrenLength(children)), () => false)
  );
  const content = useMemo(
    () => getChildrenWithForwardedProps(children, {}, 'Checkbox'),
    [children]
  );

  return <div>{content}</div>;
};

export default CheckboxGroup;
