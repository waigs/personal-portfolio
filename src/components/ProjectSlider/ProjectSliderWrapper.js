import React from 'react'
import PropTypes from 'prop-types'
import OwlCarousel from 'react-owl-carousel2'

import 'react-owl-carousel2/src/owl.carousel.css'

const ProjectSliderWrapper = ({ children }) => {
  const options = {
    items: 1,
    smartSpeed: 800,
    nav: false,
    margin: 80,
    responsive: {
      600: {
        stagePadding: 40,
      },
      1000: {
        nav: true,
        autoWidth: true,
      },
    },
  }

  return <OwlCarousel options={options}>{children}</OwlCarousel>
}

ProjectSliderWrapper.propTypes = {
  children: PropTypes.node,
}
export default ProjectSliderWrapper
