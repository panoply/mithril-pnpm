import m from 'mithril';
import { toLower } from 'rambda';
import { someMethod, asMethodsFromFiles as eg } from '@mpnpm/api';

export const Foo: m.Component<ReturnType<typeof eg>> = {
  oninit: (vnode) => {
    console.log('oninit');
    vnode.attrs = eg();
  },
  oncreate: (vnode) => {
    console.log('oncreate');
    console.log(vnode.attrs.one);
    console.log(vnode.attrs.two);
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
      m('small', 'The rambda.js module will be treeshaken')
    ])
  ]
};
