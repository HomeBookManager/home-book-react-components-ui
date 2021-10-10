// others
import { TBlockCodeAttributes, TBlockCodeData } from '../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getContextAttributeName = (name: string) =>
  getSpanWithClosure(ClassNameContext.attributeName, name);

const getContextAttributeValue = (value: any) =>
  getSpanWithClosure(ClassNameContext.attributeValue, value);

const getContextAttribute = (
  attributes: Array<TBlockCodeAttributes>
): string => {
  const context = attributes
    .map(
      ({ name, value }) =>
        `${getContextAttributeName(name)}${
          value ? `="${getContextAttributeValue(value)}"` : ''
        }`
    )
    .join(' ');

  return getSpanWithClosure(ClassNameContext.attribute, context);
};

const getBeginingOfContextComponent = (
  componentName: string,
  mappedAttributes: string
): string =>
  `<${getSpanWithClosure(
    ClassNameContext.componentName,
    `${componentName} ${mappedAttributes}`
  )}`;

const getContextHTMLComponents = (
  { attributes = [], children }: TBlockCodeData,
  componentName: string
): string => {
  const parsedAttributes = getContextAttribute(attributes);

  return !!children
    ? `${getBeginingOfContextComponent(
        componentName,
        parsedAttributes
      )}>${children}<&#47;<span ${
        ClassNameContext.componentName
      }>${componentName}</span>>`
    : `${getBeginingOfContextComponent(componentName, parsedAttributes)} />`;
};

export default getContextHTMLComponents;
