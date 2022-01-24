import 'styles/stylesheet.scss';
import m from 'mithril';
import { Foo } from 'components/foo';
import { Bar } from 'components/bar';

export default m.route(document.body, '/', {
  '/': Foo,
  '/bar': Bar
});
