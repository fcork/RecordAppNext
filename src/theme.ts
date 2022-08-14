import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';
import { fontSize } from '@mui/system';

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
  typography: {
    h2: {
      fontSize: '0.8125rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
    fontWeight: 800
    },
    h6: {
      fontSize: '1rem',
    fontWeight: 800
    }
    
    
  }
});

export default theme;
