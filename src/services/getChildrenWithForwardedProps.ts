import get from 'lodash/get';
import isArray from 'lodash/isArray';
import isObject from 'lodash/isObject';
import { cloneElement, isValidElement, ReactElement, ReactNode } from 'react';

// services
import getRandomKey from './getRandomKey';

const shouldPassProps = (child: ReactElement, componentName: string): boolean =>
  // @ts-ignore
  isValidElement(child) && child.type.name === componentName;

const getChildren = (
  children: ReactElement | Array<ReactElement>,
  props: { [key: string]: any },
  keys: Array<string>,
  componentName: string
): ReactNode | string => {
  switch (true) {
    case isArray(children):
      return getChildrenByArray(
        children as unknown as Array<ReactElement>,
        props,
        keys,
        componentName
      );
    case isObject(children):
      return getChildrenByObject(
        children as unknown as ReactElement,
        props,
        keys,
        componentName
      );
    default:
      return children;
  }
};

const getChildrenByObject = (
  children: ReactElement,
  props: { [key: string]: any },
  keys: Array<string>,
  componentName: string
): {} => {
  if (!shouldPassProps(children, componentName)) {
    const childrenFromProps = get(children, 'props.children');

    if (childrenFromProps) {
      return cloneElement(children, {
        ...children.props,
        children: getChildren(childrenFromProps, props, keys, componentName),
        key: getRandomKey(keys),
      });
    }

    return cloneElement(children, {
      ...children.props,
      key: getRandomKey(keys),
    });
  }

  return cloneElement(children, {
    ...children.props,
    ...props,
    key: getRandomKey(keys),
  });
};

const getChildrenByArray = (
  children: Array<ReactElement>,
  props: { [key: string]: any },
  keys: Array<string>,
  componentName: string
): ReactNode[] =>
  children.map((children: ReactElement) =>
    getChildren(children, props, keys, componentName)
  );

const getChildrenWithForwardedProps = (
  children: ReactElement | Array<ReactElement>,
  props: { [key: string]: any },
  componentName: string
): ReactNode => {
  return getChildren(children, props, [], componentName);
};

export default getChildrenWithForwardedProps;
