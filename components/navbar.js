import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ categories, collections }) {
  return (
    <div className="bg-gray-300 p-2">
      <NavMenu categories={categories} collections={collections} />
    </div>
  )
}