import isArray from 'lodash/isArray';

// others
import { TComponentAttributes, TProps } from '../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getContextAttributeName = (name: string) =>
  getSpanWithClosure(ClassNameContext.attributeName, name);

const getContextAttributeValue = (value: any) =>
  getSpanWithClosure(ClassNameContext.attributeValue, value);

const getContextAttributes = (
  attributes: Array<TComponentAttributes>
): string => {
  const context = attributes
    .map(
      ({ name, value }) =>
        ` ${getContextAttributeName(name)}${
          value ? `="${getContextAttributeValue(value)}"` : ''
        }`
    )
    .join('');

  return getSpanWithClosure(ClassNameContext.attribute, context);
};

const getContextHTMLChildren = (children: string | Array<string>): string => {
  if (isArray(children)) {
    return `<br/>${children
      .map((child) => getSpanWithClosure(ClassNameContext.children, child))
      .join('<br/>')}<br/>`;
  }
  return children;
};

const getBeginingOfContextComponent = (
  componentName: string,
  mappedAttributes: string
): string =>
  `<${getSpanWithClosure(
    ClassNameContext.componentName,
    `${componentName}${mappedAttributes}`
  )}`;

const getContextHTMLComponents = (
  { attributes = [], children }: TProps,
  componentName: string
): string => {
  const mappedAttributes = getContextAttributes(attributes);

  return !!children
    ? `${getBeginingOfContextComponent(
        componentName,
        mappedAttributes
      )}>${getContextHTMLChildren(children)}<&#47;<span ${
        ClassNameContext.componentName
      }>${componentName}</span>>`
    : `${getBeginingOfContextComponent(componentName, mappedAttributes)} />`;
};

export default getContextHTMLComponents;
