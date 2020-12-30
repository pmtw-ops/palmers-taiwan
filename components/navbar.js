import Container from './container'
import NavMenu from './nav-menu'

export default function Navbar({ categories, collections }) {
  return (
    <div className="bg-pmbrown-800">
      <NavMenu categories={categories} collections={collections} />
    </div>
  )
}