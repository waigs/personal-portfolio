import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Navbar extends Component {
  state = {
    collapsed: true,
  }

  toggleCollapse = () => {
    const collapsed = !this.state.collapsed
    this.setState({ collapsed })
  }
  render() {
    const { data } = this.props
    const { collapsed } = this.state
    const navClass = collapsed ? '' : 'collapse'
    const navbarData = data.edges[0].node.frontmatter

    return (
      <ul className="nav">
        <li className="nav__hamburger">
          <button onClick={this.toggleCollapse}>Nav</button>
        </li>
        <li className={`nav__icons ${navClass}`}>
          <ul>
            {navbarData.menuItems.map(menuItem => (
              <li key={menuItem.iconName}>
                <a
                  href={menuItem.linkUrl}
                  className={`nav__icons-${menuItem.iconName}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {menuItem.iconName}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    )
  }
}
//TODO
Navbar.propTypes = {
  data: PropTypes.shape({
    menuItems: PropTypes.arrayOf({
      iconName: PropTypes.string,
      iconUrl: PropTypes.string,
    }),
  }),
}

export default Navbar
