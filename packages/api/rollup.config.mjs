import { config, env, rollup, plugin } from '@mpnpm/rollup-config';

export default rollup(
  {
    input: 'src/index.ts',
    output: {
      format: 'esm',
      exports: 'named',
      sourcemap: env.is('dev', 'inline'),
      file: config.output.main,
      preferConst: true,
      plugins: env.is('prod', [
        plugin.esminify(),
        plugin.filesize(
          {
            showBeforeSizes: 'build'
          }
        )
      ])
    },
    plugins: [
      plugin.del(
        {
          verbose: true,
          runOnce: true,
          targets: 'dist/*'
        }
      ),
      plugin.alias(
        {
          customResolver: plugin.resolve(
            {
              extensions: [ '.ts' ]
            }
          ),
          entries: config.alias(
            [
              'foo',
              'bar'
            ]
          )
        }
      ),
      plugin.esbuild(),
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
      )
    ]
  }
);
