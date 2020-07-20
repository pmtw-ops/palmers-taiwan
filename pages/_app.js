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
import AppContext from "@/context/appcontext";

class MyApp extends App {
  state = {
    user: null,
  };

  componentDidMount() {
    // grab token value from cookie
    const token = Cookie.get("token");

    if (token) {
      // authenticate the token on the server and place set user object
      fetch(`${process.env.NEXT_PUBLIC_API_URL}users/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(async (res) => {
        // if res comes back not valid, token is not valid
        // delete the token and log the user out on client
        if (!res.ok) {
          Cookie.remove("token");
          this.setState({ user: null });
          return null;
        }
        const user = await res.json();
        this.setUser(user);
      });
    }
  }

  setUser = (user) => {
    this.setState({ user });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          isAuthenticated: !!this.state.user,
          setUser: this.setUser,
        }}
      >
        <Head>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
            crossOrigin="anonymous"
          />
        </Head>

        <Component {...pageProps} />
      </AppContext.Provider>
    );
  }
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

export default MyApp;