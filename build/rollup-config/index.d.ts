import alias from '@rollup/plugin-alias';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { Options as BSOptions } from 'browser-sync';
import { Plugin as RollupPlugin } from 'rollup';
export { defineConfig as rollup } from 'rollup';
export { config, env } from '@brixtol/rollup-utils';
/**
 * Rollup Plugins
 *
 * A helper export of rollup plugins.
 */
export declare const plugin: {
    /**
     * Alias modules in a build.
     *
     * [@rollup/plugin-alias](https://git.io/JuTc9)
     */
    readonly alias: typeof alias;
    /**
     * Beeps when a build ends with errors.
     *
     * [@rollup/plugin-beep](https://git.io/JuTEW)
     */
    readonly beep: any;
    /**
     * Copy files and folders, with glob support.
     *
     * [rollup-plugin-copy](https://git.io/JuTux)
     */
    readonly copy: typeof copy;
    /**
     * Convert CommonJS modules to ES Modules
     *
     * [@rollup/plugin-commonjs](https://git.io/JuTcI)
     */
    readonly commonjs: typeof commonjs;
    /**
     * Delete files and folders.
     *
     * [rollup-plugin-delete](https://git.io/JuTz3)
     */
    readonly del: typeof del;
    /**
     * ESBuild integration with TypeScript support.
     *
     * [rollup-plugin-esbuild](https://git.io/J1DEP)
     */
    readonly esbuild: (options?: import("rollup-plugin-esbuild").Options) => RollupPlugin;
    /**
     * Minify using esbuild
     *
     * [rollup-plugin-esbuild](https://git.io/J1DEP)
     */
    readonly esminify: (options?: {
        sourceMap?: boolean;
        minify?: boolean;
        minifyWhitespace?: boolean;
        minifyIdentifiers?: boolean;
        minifySyntax?: boolean;
        keepNames?: boolean;
        legalComments?: "none" | "inline" | "eof" | "linked" | "external";
        target?: string | string[];
    }) => RollupPlugin;
    /**
     * Show filesize in the cli
     *
     * [rollup-plugin-filesize](https://git.io/JuTzw)
     */
    readonly filesize: (options?: import("rollup-plugin-filesize").FileSizePluginOptions) => RollupPlugin;
    /**
     * Creates HTML files to serve Rollup bundles
     *
     * [@rollup/plugin-html](https://git.io/JuTWL)
     */
    readonly html: typeof html;
    /**
     * Seamless integration between Rollup and PostCSS.
     *
     * [rollup-plugin-postcss](https://git.io/JuEZg)
     */
    readonly postcss: typeof postcss;
    /**
     * Use the Node resolution algorithm.
     *
     * [@rollup/plugin-node-resolve](https://git.io/JOqCR)
     */
    readonly resolve: typeof resolve;
    /**
     * Replace occurrences of a set of strings.
     *
     * [@rollup/plugin-replace](https://git.io/JuTcC)
     */
    readonly replace: typeof replace;
    /**
     * Serve bundle via Browser Sync
     *
     * [rollup-plugin-browsersync](https://git.io/JXjkK)
     */
    readonly bs: (options: BSOptions) => RollupPlugin;
};
