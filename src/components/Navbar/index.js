import React from 'react'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/team'>
            Team
          </NavLink>
          <NavLink to='/blogs'>
            Blogs
          </NavLink>
          <NavLink to='/sign-up'>
            Sign up
          </NavLink>

        </NavMenu>
        <NavBtn>

          <NavBtnLink to='/sign-in'>Sign in</NavBtnLink>
        </NavBtn>

      </Nav>


    </>
  )
}

export default Navbar