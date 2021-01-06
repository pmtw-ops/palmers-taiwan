import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ appData }) {
  return (
    <div className="bg-gray-300 p-2">
      <NavMenu appData={appData} />
    </div>
  )
}