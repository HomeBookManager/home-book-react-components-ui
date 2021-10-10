// others
import { TComponentAttributes, TComponent } from '../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getContextAttributeName = (name: string) =>
  getSpanWithClosure(ClassNameContext.attributeName, name);

const getContextAttributeValue = (value: any) =>
  getSpanWithClosure(ClassNameContext.attributeValue, value);

const getContextAttribute = (
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

const getBeginingOfContextComponent = (
  componentName: string,
  mappedAttributes: string
): string =>
  `<${getSpanWithClosure(
    ClassNameContext.componentName,
    `${componentName}${mappedAttributes}`
  )}`;

const getContextHTMLComponents = (
  { attributes = [], children }: TComponent,
  componentName: string
): string => {
  const mappedAttributes = getContextAttribute(attributes);

  return !!children
    ? `${getBeginingOfContextComponent(
        componentName,
        mappedAttributes
      )}>${children}<&#47;<span ${
        ClassNameContext.componentName
      }>${componentName}</span>>`
    : `${getBeginingOfContextComponent(componentName, mappedAttributes)} />`;
};

export default getContextHTMLComponents;
