import { shallow } from 'enzyme';
import { createMuiTheme } from 'material-ui/styles';

const muiTheme = createMuiTheme();
const shallowWithContext = node => shallow(node, { context: { muiTheme } }).dive();

export default shallowWithContext;