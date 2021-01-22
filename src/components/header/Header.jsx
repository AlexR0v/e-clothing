import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/svg/crown.svg'
import { auth } from '../firebase/utils'
import './header.scss'

const Header = ({ user }) => {
  return (
    <div className='header'>
      <Link
        to='/'
        className='logo-container'
      >
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link
          to='/shop'
          className='option'
        >
          SHOP
        </Link>
        <Link
          to='/shop'
          className='option'
        >
          CONTACT
        </Link>
        {
          user ?
          <Link
            to='#'
            className='option'
            onClick={() => auth.signOut()}
          >
            {user}
          </Link> :
          <Link
            to='/sign-in'
            className='option'
          >
            SIGN IN
          </Link>
        }
      </div>
    </div>
  )
}

export default Header
