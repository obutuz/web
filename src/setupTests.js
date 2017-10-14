/* eslint import/first: 0 */
/* eslint no-unused-vars: 0 */
// Need this eslint exception as a workaround for polyfill
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
import raf from './polyFill';
import Enzyme from 'enzyme';
import { createMuiTheme } from 'material-ui/styles';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

Enzyme.configure({ adapter: new Adapter() });
