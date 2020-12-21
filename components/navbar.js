import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ categories, collections }) {
  return (
    <div className="w-full bg-gray-300 border-b mb-4">
      <NavMenu categories={categories} collections={collections} />
    </div>
  )
}