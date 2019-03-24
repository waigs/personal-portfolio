import React from 'react'
import PropTypes from 'prop-types'
import ReactMarkdown from 'react-markdown'

const Footer = ({ data }) => {
  const footer = data.edges[0].node.frontmatter

  return (
    <footer className="footer-container">
      <ReactMarkdown source={footer.footerText} />
    </footer>
  )
}

Footer.propTypes = {
  data: PropTypes.shape({
    footerText: PropTypes.node,
  }),
}

export default Footer
