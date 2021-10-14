import path from 'path';
import rollupPluginutils from 'rollup-pluginutils';

const rollupPluginSvg = (options = {}) => {
  const filter = rollupPluginutils.createFilter(
    options.include,
    options.exclude
  );

  return {
    name: 'svg',
    transform: function transform(code, id) {
      if (filter(id) && path.extname(id) === '.svg') {
        const content = code
          .trim()
          .substring(code.indexOf('"') + 1, code.lastIndexOf('"'));
        const encoded = JSON.stringify(content);
        return { code: 'export default ' + encoded, map: { mappings: '' } };
      }

      return null;
    },
  };
};

export default rollupPluginSvg;
