import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ appData }) {
  return (
    <div className="border-t-4 border-pmbrown-100 bg-gray-50 p-4">
      <NavMenu appData={appData} />
    </div>
  )
}