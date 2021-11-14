import m from 'mithril';
import { toLower } from 'rambda';
import { someMethod } from '@mpnpm/api';

export const Foo: m.Component<{}> = {
  oninit: () => {
    console.log('oninit');
  },
  oncreate: () => {
    console.log('oncreate');
  },
  onupdate: () => {
    console.log('onupdate');
  },
  view: () => [
    m('h1', 'Hello World'),
    m('p', 'We are using some methods defined in the @mpnpm/api package of the monorepo'),
    m('button', { onclick: ({ target }) => { target.innerText = someMethod(); } }, 'Click me!'),
    m('p', [
      m(m.route.Link, {
        selector: 'a',
        options: { replace: true },
        href: '/bar',
        disabled: false
      // and other attributes
      }, 'visit bar')
    ]),
    m('p', [
      m('div', `Using Rambda.js to turn this to ${toLower('LOWERCASE')}`),
      m('small', 'The rambda.js module will be treeshaked')
    ])
  ]
};
