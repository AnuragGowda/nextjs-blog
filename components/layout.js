import Head from 'next/head'
import Navbar from './navbar';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Navbar/>
        {children}
      </main>
    </>
  )
}
