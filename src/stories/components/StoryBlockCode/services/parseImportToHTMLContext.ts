// others
import { TImport } from '../types';
import { ClassNameContext } from '../constants';

// services
import { getHTMLEl } from './common';

const getItemWithHighlightAs = (itemsToImports: string): string =>
  itemsToImports
    .split(' ')
    .map((item) =>
      item === 'as' ? getHTMLEl(ClassNameContext.importAs, 'as') : item
    )
    .join(' ');

const parseImportToHTMLContext = ({ items: itemsToImports, path }: TImport) =>
  [
    getHTMLEl(ClassNameContext.import, 'import'),
    getHTMLEl(
      ClassNameContext.importItems,
      getItemWithHighlightAs(itemsToImports)
    ),
    getHTMLEl(ClassNameContext.importFrom, 'from'),
    getHTMLEl(ClassNameContext.importPath, `'${path}'`),
    getHTMLEl(ClassNameContext.importSemicolon, ';'),
  ].join(' ');

export default parseImportToHTMLContext;
