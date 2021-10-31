import './styles/stylesheet.scss';
import m from 'mithril';
import { Foo } from './components/foo';

export default m.route(document.body, '/', {
  '/': Foo
});
