import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from './header'
import Navbar from './navbar'

export default function Layout({ categories, collections, preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <Navbar categories={categories} collections={collections} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
