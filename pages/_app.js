import '../styles/globals.css'
import { ContextWrapper } from '../context/ContextObject';
// import { purple } from '@mui/material/colors';
import { ThemeProvider } from '@mui/material/styles';
import Theme from '../src/Theme';

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#212121',
//     },
//   },
// });


const app = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={Theme}>
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
    </ThemeProvider>
      
  )
}

export default app
