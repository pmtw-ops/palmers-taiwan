// import '@/styles/index.css'

// import App from 'next/app'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

/* _app.js */
import '@/styles/index.css'
import React from "react";
import App from "next/app";
import Head from "next/head";
import Cookie from "js-cookie";
import fetch from "isomorphic-fetch";

// Redux
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '@/redux/store'

import Layout from '@/components/layout';
import { getAppData } from '@/lib/api_app'

class MyApp extends App {
  render() {
    let store = {};
    const { Component, pageProps } = this.props;
    const appData = pageProps.appData
    return (
      <>
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
      </>
    );
  }
}

// Pass Navbar datas ...
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);
  const appData = (await getAppData()) || []

  appProps.pageProps['appData'] = appData;

  return { ...appProps }
}


//makeStore function that returns a new store for every request
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);