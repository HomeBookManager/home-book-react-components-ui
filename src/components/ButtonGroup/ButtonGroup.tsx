import { FC, ReactElement, useMemo } from 'react';

// services
import getChildrenWithForwardedProps from '../../services/getChildrenWithForwardedProps';

// styles
import './button-group.scss';

export type TProps = {
  children: ReactElement | Array<ReactElement>;
};

export const ButtonGroup: FC<TProps> = ({ children }) => {
  const content = useMemo(
    () => getChildrenWithForwardedProps(children, {}, 'Button'),
    [children]
  );
  return <>{content}</>;
};

export default ButtonGroup;
