import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ categories, collections }) {
  return (
    <div className="w-full bg-pmbrown-800">
      <NavMenu categories={categories} collections={collections} />
    </div>
  )
}