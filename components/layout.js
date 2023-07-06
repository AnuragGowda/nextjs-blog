import Head from 'next/head'
import Navbar from './navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="h-screen">
      <Navbar/>
        {children}
      </main>
    </>
  )
}
