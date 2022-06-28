import '../styles/globals.css'
import { ContextWrapper } from '../context/ContextObject';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#212121',
    },
  },
});
 

const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </ThemeProvider>
      
  )
}

export default app
