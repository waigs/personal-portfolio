import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../pages/index'

const IndexPagePreview = ({ entry }) => {
  const hero = entry.getIn(['data']).toJS()
  return <IndexPageTemplate heroData={hero} />
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
}

export default IndexPagePreview
