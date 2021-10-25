import isArray from 'lodash/isArray';
import { ReactElement, ReactNode } from 'react';

const getChildren = (children: ReactElement | Array<ReactElement>): number => {
  switch (true) {
    case isArray(children):
      return (children as unknown as Array<ReactElement>).length;
    default:
      return children ? 1 : 0;
  }
};

const getChildrenLength = (
  children: ReactElement | Array<ReactElement>
): ReactNode => getChildren(children);

export default getChildrenLength;
