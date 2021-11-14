import { rollup, plugin } from '@mpnpm/rollup-config';
import mcss from '@brixtol/mcss';
import typescript from 'typescript';
import * as tslib from 'tslib';
import sass from 'sass';

export default rollup(
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'es',
        dir: 'public',
        exports: 'named',
        sourcemap: 'inline',
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
      mcss(
        {
          declaration: 'src/style/styles.d.ts'
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
          incremental: true
        }
      ),
      plugin.postcss(
        {
          extract: true,
          autoModules: false,
          use: { sass },
          plugins: [
            mcss.postcss()
          ]
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
      plugin.bs(
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
      )
    ]
  }
);
