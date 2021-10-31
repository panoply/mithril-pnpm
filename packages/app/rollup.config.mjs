import { env, rollup, plugin } from '@mpnpm/rollup-config';
import typescript from 'typescript';
import * as tslib from 'tslib';
import sass from 'sass';
import autoprefixer from 'autoprefixer';
import purge from '@fullhuman/postcss-purgecss';

export default rollup([
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
        }
      }
    ],
    treeshake: env.if('prod')('smallest')('recommended'),
    plugins: [
      plugin.del(
        {
          runOnce: env.watch,
          targets: [
            'public/*'
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
      plugin.ts(
        {
          typescript,
          tslib,
          outputToFilesystem: false,
          incremental: env.dev
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
          plugins: env.dev ? [
            autoprefixer(),
            purge(
              {
                variables: true,
                content: [
                  'src/index.ts',
                  'src/components/**/*.ts'
                ]
              }
            )
          ] : []
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
      env.is('dev', plugin.serve(
        {
          open: false,
          host: 'localhost',
          port: 10008,
          contentBase: [
            'public'
          ]
        }
      )),
      env.is('dev', plugin.livereload(
        {
          delay: 0,
          watch: [
            'public'
          ]
        }
      )),
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
]);
