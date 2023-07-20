import '../styles/global.css'
import '../styles/blogstyles.css'
import Layout from '../components/layout'
import { ThemeProvider } from 'next-themes'


export default function App({ Component, pageProps }) {
  return (

      <ThemeProvider attribute="class" defaultTheme="light">
        <Layout title="agowda">
          <Component {...pageProps} />
        </Layout>
      </ ThemeProvider>

  )
}
