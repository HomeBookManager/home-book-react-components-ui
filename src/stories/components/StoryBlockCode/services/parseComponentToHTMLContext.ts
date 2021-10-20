import isArray from 'lodash/isArray';

// others
import { TComponentAttributes, TProps } from '../types';
import { ClassNameContext, HtmlCode } from '../constants';

// services
import { getHTMLEl } from './common';

const parseAttributesToHTML = (
  attributes: Array<TComponentAttributes>
): string => {
  const context = attributes
    .map(
      ({ name, value }) =>
        ` ${getHTMLEl(ClassNameContext.attributeName, name)}${
          value ? `="${getHTMLEl(ClassNameContext.attributeValue, value)}"` : ''
        }`
    )
    .join('');

  return getHTMLEl(ClassNameContext.attribute, context);
};

const parseComponentToHTMLContext = (
  { attributes = [], children }: TProps,
  componentName: string
): string => {
  const parsedComponent = getHTMLEl(
    ClassNameContext.componentName,
    componentName
  );
  const parsedAttributes = parseAttributesToHTML(attributes);

  if (children) {
    let parsedChildren = '';

    if (isArray(children)) {
      parsedChildren = `${children
        .map(({ componentName, props }) => {
          if (props) {
            return props
              .map((props) =>
                getHTMLEl(
                  ClassNameContext.children,
                  parseComponentToHTMLContext(props, componentName),
                  'div'
                )
              )
              .join('');
          }
          return getHTMLEl(
            ClassNameContext.children,
            parseComponentToHTMLContext({}, componentName),
            'div'
          );
        })
        .join('')}`;
    }

    return `${HtmlCode['<']}${parsedComponent}${parsedAttributes}${
      HtmlCode['>']
    }${parsedChildren ? parsedChildren : children}${
      HtmlCode['<']
    }/${parsedComponent}${HtmlCode['>']}`;
  }

  return `${HtmlCode['<']}${parsedComponent}${parsedAttributes} /${HtmlCode['>']}`;
};

export default parseComponentToHTMLContext;
