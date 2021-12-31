import 'bootstrap/dist/css/bootstrap.min.css'
import Page from "../components/Page"

export default function MyApp({ Component, pageProps }) {
    return (
        <Page>
            <Component {...pageProps} />
        </Page>
    )
}
