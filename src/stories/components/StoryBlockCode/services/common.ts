import { ClassNameContext } from '../constants';

export const getHTMLEl = (
  className: ClassNameContext,
  context?: string,
  htmlElement: 'span' | 'div' = 'span'
) => `<${htmlElement} ${className}>${context}</${htmlElement}>`;
