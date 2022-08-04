import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const colors = {
  primary: '#19857b'
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
