import '../styles/global.css'
import '../styles/blogstyles.css'
import Layout from '../components/layout'
import { ThemeProvider } from 'next-themes'
import { HelmetProvider } from 'react-helmet-async';

export default function App({ Component, pageProps }) {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class">
        <Layout title="agowda">
          <Component {...pageProps} />
        </Layout>
      </ ThemeProvider>
    </HelmetProvider>
  )
}
