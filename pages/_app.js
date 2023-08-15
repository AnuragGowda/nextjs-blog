import '../styles/global.css'
import '../styles/blogstyles.css'
import Layout from '../components/layout'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'


export default function App({ Component, pageProps }) {
  return (

      <ThemeProvider attribute="class" defaultTheme="light">
        <NextNProgress />
        <Layout title="agowda">
          <Component {...pageProps} />
        </Layout>
      </ ThemeProvider>

  )
}
