import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const colors = {
  primary: '#19857b',
  backgroundGreen: '#EFF9F7'
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      light: colors.backgroundGreen
    },
    secondary: {
      main: '#818B89',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
