import * as bar from 'bar/some-file';
import * as foo from 'foo/another-file';

export function asMethodsFromFiles () {

  const one = bar.someFileFromBar();
  const two = foo.noticeTheImportPath();

  return { one, two };

}

export function someMethod () {
  return 'someMethod';
}

export function anotherMethod () {
  return 'anotherMethod';
}
