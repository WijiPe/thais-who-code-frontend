import '../styles/globals.css'
import { ContextWrapper } from '../context/ContextObject';

const app = ({ Component, pageProps }) => {
  return (
      <ContextWrapper>
        <Component {...pageProps} />
      </ContextWrapper>
  )
}

export default app
