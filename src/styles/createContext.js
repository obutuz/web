import { create } from 'jss';
import preset from 'jss-preset-default';
import { SheetsRegistry } from 'react-jss/lib/jss';
import { createMuiTheme } from 'material-ui/styles';
import { blue, green } from 'material-ui/colors';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
});

const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

export const sheetsManager = new Map();

export default function createContext() {
  return {
    jss,
    theme,
    sheetsManager,
    sheetsRegistry: new SheetsRegistry(),
  };
}
