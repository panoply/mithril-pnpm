import { config, env, rollup, plugin } from '@mpnpm/rollup-config';
import typescript from 'typescript';
import * as tslib from 'tslib';

export default rollup(
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      file: config.output.main,
      exports: 'named',
      sourcemap: env.is('dev', 'inline'),
      preferConst: true
    },
    plugins: [
      plugin.ts(
        {
          typescript,
          tslib,
          outputToFilesystem: false
        }
      ),
      plugin.resolve(
        {
          preferBuiltins: true,
          extensions: [
            '.ts',
            '.js'
          ]
        }
      ),
      plugin.commonjs(
        {
          transformMixedEsModules: true,
          extensions: [
            '.ts',
            '.js'
          ]
        }
      ),
      env.is('prod', plugin.terser(
        {
          ecma: 2016,
          compress: {
            passes: 2
          }
        }
      )),
      env.is('prod', plugin.filesize(
        {
          showBeforeSizes: 'build'
        }
      ))
    ]
  }
);
