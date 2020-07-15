import Container from './container'
import NavMenuResponsive from './nav-menu-responsive'

export default function Navbar({ categories, collections }) {
  return (
    <Container>
      <NavMenuResponsive categories={categories} collections={collections} />
    </Container>
  )
}