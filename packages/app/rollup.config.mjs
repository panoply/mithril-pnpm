import { env, rollup, plugin, config } from '@mpnpm/rollup-config';
import sass from 'sass';
import autoprefixer from 'autoprefixer';
import purge from '@fullhuman/postcss-purgecss';

export default rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        dir: 'public',
        exports: 'named',
        sourcemap: env.is('dev', 'inline'),
        preferConst: true,
        chunkFileNames: 'chunks/[name]-[hash].js',
        esModule: true,
        manualChunks: {
          mithril: [
            'mithril'
          ]
        },
        plugins: env.is('prod', [
          plugin.esminify(),
          plugin.filesize(
            {
              showBeforeSizes: 'build'
            }
          )
        ])
      }
    ],
    plugins: [
      env.is('prod', plugin.del(
        {
          verbose: true,
          runOnce: true,
          targets: 'public/*'
        }
      )),
      plugin.alias(
        {
          customResolver: plugin.resolve(
            {
              extensions: [ '.ts' ]
            }
          ),
          entries: config.alias(
            [
              'components',
              'styles'
            ]
          )
        }
      ),
      plugin.esbuild(),
      plugin.resolve(
        {
          browser: true,
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
      plugin.postcss(
        {
          extract: true,
          autoModules: false,
          use: { sass },
          minimize: env.prod,
          plugins: env.if('dev')(
            [
              autoprefixer()
            ]
          )(
            [
              purge(
                {
                  variables: true,
                  content: [
                    'src/index.ts',
                    'src/components/**/*.ts'
                  ]
                }
              )
            ]
          )
        }
      ),
      plugin.html(
        {
          title: 'Mithril Example',
          attributes: {
            html: { lang: 'en' },
            link: { content: 'stylesheet' }
          },
          meta: [
            {
              charset: 'utf-8'
            },
            {
              name: 'viewport',
              content: 'minimum-scale=1, initial-scale=1, width=device-width'
            }
          ]
        }
      ),
      env.is('dev', plugin.bs(
        {
          watch: true,
          server: 'public',
          snippetOptions: {
            rule: {
              match: /<\/head>/i,
              fn: (snippet, match) => snippet + match
            }
          },
          files: [
            '*.css',
            '*.js',
            'chunks/*.js'
          ]
        }
      ))
    ]
  }
);
