/* _app.js */
import '@/styles/index.css'
import App from "next/app";

// Redux
import { Provider } from 'react-redux'
import store from '@/redux/store'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default MyApp;