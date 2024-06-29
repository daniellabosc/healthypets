import ContactBar from '../../components/contactbar/ContactBar'
import NavBar from '../../components/navbar/NavBar'

const Header = () => {
  return (
    <header>
      <ContactBar />
      <NavBar position='top' />
    </header>
  )
}

export default Header
