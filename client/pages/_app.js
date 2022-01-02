import { ApolloProvider } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Page from "../components/Page"
import withData from '../lib/withData';

function MyApp({ Component, pageProps, apollo }) {
    return (
        <ApolloProvider client={apollo}>
            <Page>
                <Component {...pageProps} />
            </Page>
        </ApolloProvider>
    )
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
  };
  
  export default withData(MyApp);