import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../Navbar'
import Logo from '../../images/logo.svg'

const Header = ({ data }) => (
  <header className="header">
    <img src={Logo} alt="Waigs" />
    <Navbar data={data} />
  </header>
)

Header.propTypes = {
  data: PropTypes.object,
}

export default Header
