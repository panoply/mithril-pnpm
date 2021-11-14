import { rollup, plugin } from '@mpnpm/rollup-config';
import typescript from 'typescript';
import * as tslib from 'tslib';
import sass from 'sass';
import mcss from '@brixtol/mcss';
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
        sourcemap: false,
        preferConst: true,
        chunkFileNames: 'chunks/[name]-[hash].js',
        esModule: true,
        manualChunks: {
          mithril: [
            'mithril'
          ]
        }
      }
    ],
    plugins: [
      plugin.del(
        {
          targets: [
            'public/*'
          ]
        }
      ),
      mcss(
        {
          minify: true,
          obfuscate: true,
          declaration: 'src/style/styles.d.ts'
        }
      ),
      plugin.postcss(
        {
          extract: true,
          autoModules: false,
          use: { sass },
          plugins: [
            mcss.postcss(),
            autoprefixer(),
            purge(
              {
                variables: true,
                content: [
                  'src/index.ts',
                  'src/views/**/*.ts'
                ]
              }
            )
          ]
        }
      ),
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
      plugin.ts(
        {
          typescript,
          tslib,
          outputToFilesystem: false,
          incremental: false
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
      plugin.terser(
        {
          ecma: 2016,
          compress: {
            passes: 2
          }
        }
      ),
      plugin.filesize(
        {
          showBeforeSizes: 'build'
        }
      )
    ]
  }
);
