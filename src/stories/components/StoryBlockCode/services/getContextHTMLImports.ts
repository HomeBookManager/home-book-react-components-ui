// others
import { TImport } from './../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getContextHTMLImport = ({ items: itemsToImports, path }: TImport) =>
  [
    getSpanWithClosure(ClassNameContext.import, 'import'),
    getSpanWithClosure(ClassNameContext.importItems, itemsToImports),
    getSpanWithClosure(ClassNameContext.importFrom, 'from'),
    getSpanWithClosure(ClassNameContext.importPath, `'${path}'`),
    getSpanWithClosure(ClassNameContext.importSemicolon, ';'),
  ].join(' ');

export default getContextHTMLImport;
