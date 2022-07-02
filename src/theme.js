import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*::-webkit-scrollbar": {
          width: "10px"
        },
        "*::-webkit-scrollbar-track": {
          background: "#E4EFEF"
        },
        "*::-webkit-scrollbar-thumb": {
          background: "#1D388F61",
          borderRadius: "2px"
        }
      }
    }
  },
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    }
  }
});

export default theme;