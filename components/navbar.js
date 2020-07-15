import Container from './container'
import NavMenuResponsive from './nav-menu-responsive'

export default function Navbar({ categories, collections }) {
  return (
    <div className="w-full bg-white border-b">
      <NavMenuResponsive categories={categories} collections={collections} />
    </div>
  )
}