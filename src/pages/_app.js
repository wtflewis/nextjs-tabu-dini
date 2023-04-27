import '@/styles/globals.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  const route = useRouter()
  const title = route.pathname === '/' ? 'Tabu | Lewis' : route.pathname.replace('/', '').replace('-', ' ') + '| Lewis'
  return <> 
   <Head>
    <title>{title}</title>
   </Head>
   <Component {...pageProps} /> 
   </>
}
