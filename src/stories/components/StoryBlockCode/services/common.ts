import { ClassNameContext } from '../constants';

export const getSpanWithClosure = (
  className: ClassNameContext,
  context?: string
) => `<span ${className}>${context}</span>`;
