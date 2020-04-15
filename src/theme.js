import { createMuiTheme } from '@material-ui/core/styles';
//import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const red = '#ff0000';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: red,
    },
    secondary: green,
    action: {
      active: "rgba(0, 0, 0, 0.54)",
      hover: "rgba(0, 0, 0, 1)",
      hoverOpacity: 0.04,
      selected: "rgba(0, 0, 0, 0.08)",
      selectedOpacity: 0.08,
      disabled: "rgba(0, 0, 0, 0.26)",
      disabledBackground: "rgba(0, 0, 0, 0.12)",
      disabledOpacity: 0.38,
      focus: "rgba(0, 0, 0, 0.12)",
    },
  },
  status: {
    danger: 'lightBlue',
  },
});

export default theme;