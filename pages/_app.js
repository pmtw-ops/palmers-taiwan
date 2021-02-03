/* _app.js */
import '@/styles/index.css'
import React from "react";
import App from "next/app";

// Redux
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import store from '@/redux/store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        {/* <Provider store={store}> */}
        <Component {...pageProps} />
        {/* </Provider> */}
      </>
    );
  }
}

export default MyApp;