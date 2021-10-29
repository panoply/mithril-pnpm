import m from 'mithril';
import { someMethod } from '@mpnpm/api';

export const Foo = {
  oninit: () => console.log('loaded'),
  oncreate: () => console.log(someMethod()),
  view: () => m('h1', 'Hello World')
};
