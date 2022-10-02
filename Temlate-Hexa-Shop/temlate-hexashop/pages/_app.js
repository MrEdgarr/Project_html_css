import '../public/assets/css/style.css';
import '../public/assets/fontawesome-free-6.1.1-web/css/all.min.css'
import '../public/assets/css/responsive.css';
import Layout from '../component/layout';
import '../public/assets/css/load.css'

export default function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}
