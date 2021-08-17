import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'
import { ReactComponent as Dogs } from '../../Assets/dogs.svg'

const Header = () => {
  return (
    <header className="header">
      <nav className="nav container ">
        <Link className="logo" to='/'>
          <Dogs />
        </Link>
        <Link className="login" to='/login'>Login / Criar</Link>
      </nav>
    </header>
  )
}

export default Header
