// others
import { TImport } from './../types';
import { ClassNameContext } from '../constants';

// services
import { getSpanWithClosure } from './common';

const getItemWithHighlightAs = (itemsToImports: string): string =>
  itemsToImports
    .split(' ')
    .map((item) =>
      item === 'as' ? getSpanWithClosure(ClassNameContext.importAs, 'as') : item
    )
    .join(' ');

const getContextHTMLImport = ({ items: itemsToImports, path }: TImport) =>
  [
    getSpanWithClosure(ClassNameContext.import, 'import'),
    getSpanWithClosure(
      ClassNameContext.importItems,
      getItemWithHighlightAs(itemsToImports)
    ),
    getSpanWithClosure(ClassNameContext.importFrom, 'from'),
    getSpanWithClosure(ClassNameContext.importPath, `'${path}'`),
    getSpanWithClosure(ClassNameContext.importSemicolon, ';'),
  ].join(' ');

export default getContextHTMLImport;
