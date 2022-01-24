import { someFileFromBar } from 'bar/some-file';

/**
 * We export some function, important to
 * note the import path from `bar` as we
 * leveraged `files` in the typescript `tsconfig.json`
 * file and rollup plugin `alias` to faciliatate this.
 */
export function noticeTheImportPath () {

  return someFileFromBar();

}
