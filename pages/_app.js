import '@/styles/index.css'

import App from 'next/app'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// Placeholder Test Data
const categoriesTestData = ['Cat1', 'Cat2', 'Cat3', 'Cat4', 'Cat5'];
const collectionsTestData = ['Col1', 'Col2', 'Col3', 'Col4', 'Col5',];

// Pass Navbar datas ...
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  
  appProps.pageProps['categories'] = categoriesTestData;
  appProps.pageProps['collections'] = collectionsTestData;

  return { ...appProps }
}

export default MyApp
