import { NavLink } from 'react-router-dom'
export const Navbar = () => {
  const navLinkStyles = ({ isActive }: any) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      color: 'white',
      align: 'center'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>
    </nav>
  )
}
