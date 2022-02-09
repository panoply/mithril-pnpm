import alias from '@rollup/plugin-alias';
import beep from '@rollup/plugin-beep';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import bs from 'rollup-plugin-browsersync';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import filesize from 'rollup-plugin-filesize';
import esbuild, { minify } from 'rollup-plugin-esbuild';
import { Options as BSOptions } from 'browser-sync';
import { Plugin as RollupPlugin } from 'rollup';
export { defineConfig as rollup } from 'rollup';
export { config, env } from '@brixtol/rollup-utils';

/**
 * Rollup Plugins
 *
 * A helper export of rollup plugins.
 */
export const plugin = {
  /**
   * Alias modules in a build.
   *
   * [@rollup/plugin-alias](https://git.io/JuTc9)
   */
  get alias () { return alias; },
  /**
   * Beeps when a build ends with errors.
   *
   * [@rollup/plugin-beep](https://git.io/JuTEW)
   */
  get beep () { return beep; },
  /**
   * Copy files and folders, with glob support.
   *
   * [rollup-plugin-copy](https://git.io/JuTux)
   */
  get copy () { return copy; },
  /**
   * Convert CommonJS modules to ES Modules
   *
   * [@rollup/plugin-commonjs](https://git.io/JuTcI)
   */
  get commonjs () { return commonjs; },
  /**
   * Delete files and folders.
   *
   * [rollup-plugin-delete](https://git.io/JuTz3)
   */
  get del () { return del; },
  /**
   * ESBuild integration with TypeScript support.
   *
   * [rollup-plugin-esbuild](https://git.io/J1DEP)
   */
  get esbuild () { return esbuild; },
  /**
   * Minify using esbuild
   *
   * [rollup-plugin-esbuild](https://git.io/J1DEP)
   */
  get esminify () { return minify; },
  /**
   * Show filesize in the cli
   *
   * [rollup-plugin-filesize](https://git.io/JuTzw)
   */
  get filesize () { return filesize; },
  /**
   * Creates HTML files to serve Rollup bundles
   *
   * [@rollup/plugin-html](https://git.io/JuTWL)
   */
  get html () { return html; },
  /**
   * Seamless integration between Rollup and PostCSS.
   *
   * [rollup-plugin-postcss](https://git.io/JuEZg)
   */
  get postcss () { return postcss; },
  /**
   * Use the Node resolution algorithm.
   *
   * [@rollup/plugin-node-resolve](https://git.io/JOqCR)
   */
  get resolve () { return resolve; },
  /**
   * Replace occurrences of a set of strings.
   *
   * [@rollup/plugin-replace](https://git.io/JuTcC)
   */
  get replace () { return replace; },
  /**
   * Serve bundle via Browser Sync
   *
   * [rollup-plugin-browsersync](https://git.io/JXjkK)
   */
  get bs (): (options: BSOptions) => RollupPlugin { return bs; }
};
