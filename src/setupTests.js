/* eslint import/first: 0 */
/* eslint no-unused-vars: 0 */
// Need this eslint exception as a workaround for polyfill
// https://github.com/facebookincubator/create-react-app/issues/3199#issuecomment-332842582
import raf from './polyFill';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';
import 'jest-localstorage-mock';

Enzyme.configure({ adapter: new Adapter() });
