import m from 'mithril';

export const Bar: m.Component<{}> = {
  view: () => [
    m('h1', 'Bar Page'),
    m('p', 'Just another example that is routed'),
    m('a', { href: '/' }, 'go back')
  ]
};
