import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import visualizer from 'rollup-plugin-visualizer';
import { getFiles } from './scripts/buildUtils';
import { terser } from 'rollup-plugin-terser';

// services
import rollupPluginSvg from './src/services/library/rollup-plugin-svg';

const extensions = ['.js', '.ts', '.jsx', '.tsx'];
const excludeExtensions = ['.stories.tsx'];

export default {
  input: [
    './src/index.ts',
    ...getFiles('./src/components', extensions, excludeExtensions),
  ],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    image(),
    rollupPluginSvg(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    postcss({
      extract: false,
      modules: true,
      use: ['sass'],
    }),
    terser(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: true,
    }),
    resolve(),
    commonjs(),
  ],
  external: ['react'],
};
