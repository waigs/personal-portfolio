import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Header from '../Header'
import Footer from '../Footer'
import '../../styles'

const Layout = ({ children, navbarData, footerData }) => (
  <div className="wrapper">
    <Header data={navbarData} />
    {children}
    <Footer data={footerData} />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node,
}

export const query = graphql`
  fragment LayoutFragment on Query {
    navbarData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "navbar" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            menuItems {
              iconName
              linkUrl
            }
          }
        }
      }
    }
    footerData: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "footer" } } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            footerText
          }
        }
      }
    }
  }
`

export default Layout
