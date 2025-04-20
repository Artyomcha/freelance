import '../styles/globals.css';
// import { GoogleTagManager } from '@next/third-parties/google';

function MyApp({ Component, pageProps }) {
  return (
  <>
    {/* <Script
      src="https://www.googletagmanager.com/gtag/js?id=GTM-WJLCQMKM"
      strategy="afterInteractive"
      async
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'GTM-WJLCQMKM');
        `,
      }}
    /> */}
    <Component {...pageProps} />;
  </>
  )
}

export default MyApp;