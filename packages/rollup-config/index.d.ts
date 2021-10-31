import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import ts from '@rollup/plugin-typescript';
import livereload from 'rollup-plugin-livereload';
import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import { terser } from 'rollup-plugin-terser';
export { defineConfig as rollup } from 'rollup';
export { config, env } from '@brixtol/rollup-utils';
/**
 * Rollup Plugins
 *
 * A helper export of rollup plugins used within packages
 * maintained by [Brixtol](https://brixtol.com).
 */
export declare const plugin: {
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
     * Show filesize in the cli
     *
     * [rollup-plugin-filesize](https://git.io/JuTzw)
     */
    readonly filesize: (options?: import("rollup-plugin-filesize").FileSizePluginOptions) => import("rollup").Plugin;
    /**
     * Creates HTML files to serve Rollup bundles
     *
     * [@rollup/plugin-html](https://git.io/JuTWL)
     */
    readonly html: typeof html;
    /**
     * Live Reload after changes
     *
     * [rollup-plugin-livereload](https://git.io/JuTu8)
     */
    readonly livereload: typeof livereload;
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
     * Serve the bundle
     *
     * [rollup-plugin-serve](https://git.io/JuTuq)
     */
    readonly serve: any;
    /**
     * Minify generated es bundle using terser under the hood.
     * [rollup-plugin-terser](https://git.io/JuTz5)
     */
    readonly terser: typeof terser;
    /**
     * Seamless integration with Typescript.
     *
     * [@rollup/plugin-typescript](https://git.io/JuTng)
     */
    readonly ts: typeof ts;
};
