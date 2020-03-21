import React from 'react'

const LinkRenderer = ({ href, children }) => (
  <>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  </>
)

export default LinkRenderer
