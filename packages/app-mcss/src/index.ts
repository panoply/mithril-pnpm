import './style/styles.scss';
import m from 'mithril';
import { Home } from './views/home';

export default m.route(document.body, '/', {
  '/': Home
});
