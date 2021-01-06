import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Navbar from './navbar'

export default function Layout({ children, appData }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Navbar appData={appData} />
        <main>{children}</main>
      </div>
      <Footer appData={appData} />
    </>
  )
}
