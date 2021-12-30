import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en-US'>
                <Head>
                    <meta charset="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="theme-color" content="#000000" />
                    <link rel="icon" href="%PUBLIC_URL%/images/midnightlogo.png" />
                    <link rel="apple-touch-icon" href="%PUBLIC_URL%/images/midnightlogo.png" />
                    <meta name="title" property="og:title" content="Midnight Motorsports" />
                    <meta property="og:type" content="Website" />
                    <meta name="image" property="og:image" content="https://live.staticflickr.com/65535/51749038917_3c9b33df87_h.jpg" />
                    <meta name="description"
                        content="Midnight Motorsports eCommerce website where users can buy car parts for various makes, models, and years." />
                    <meta name="author" content="Maxwell Walin, Daniel Stark, Jesus Bautista, Parth Bhatt" />
                    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link href="https://fonts.googleapis.com/css2?family=Sora:wght@600&display=swap" rel="stylesheet" />
                    <link href="/css/all.css" rel="stylesheet" />

                    <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

                    <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" crossorigin></script>

                    <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js" crossorigin></script>

                    <title>Midnight Motorsports</title>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};