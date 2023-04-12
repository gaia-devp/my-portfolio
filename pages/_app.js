import '@/styles/style.scss'
import '@/styles/reset.css'
import Layout from '../components/layout';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
