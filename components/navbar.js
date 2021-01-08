import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ appData }) {
  return (
    <div className="bg-gray-50 p-4">
      <NavMenu appData={appData} />
    </div>
  )
}