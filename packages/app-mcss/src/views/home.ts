import m from 'mithril';

export const Home = {
  view: () => m.div('container-fluid')(
    [
      m.div(
        'row',
        'justify-content-center',
        'align-items-center',
        'ms-5'
      )(
        m.div('col-auto')(
          [
            m.h1('Example App'),
            m.p('We are using mcss for selectors in this app'),
            m('hr'),
            m.h6('We can write HyperScript Like this:'),
            m.pre('my-3', [
              m('code', 'm.div("foo", "bar", "baz")({ onclick: e => {} }, "some text")')
            ]),
            m.h6('Like this:'),
            m.pre('my-3', [
              m('code', 'm.h1("I am a heading")')
            ]),
            m.h6('Or we can curry them:'),
            m.pre('my-3', [
              m('code', 'm.ul("list")([ m.li("one"), m.li("two") ])')
            ]),
            m('hr'),
            m.p('This is an experimental module, but you can take a peek in the source, to see how it works!')
          ]
        )
      )
    ]
  )

};
