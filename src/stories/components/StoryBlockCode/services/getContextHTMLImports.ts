// others
import { TImportContext } from './../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getContextHTMLImport = ({ itemsToImports, path }: TImportContext) =>
  [
    getSpanWithClosure(ClassNameContext.import, 'import'),
    getSpanWithClosure(ClassNameContext.importItems, itemsToImports),
    getSpanWithClosure(ClassNameContext.importFrom, 'from'),
    getSpanWithClosure(ClassNameContext.importPath, `'${path}'`),
  ].join(' ');

export default getContextHTMLImport;
