import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import ProjectList from '../components/ProjectList'

export const IndexPageTemplate = ({ heroData }) => (
  <>
    <Hero data={heroData} />
  </>
)

IndexPageTemplate.propTypes = {
  heroData: PropTypes.object,
}

const IndexPage = ({ data, data: { navbarData, footerData } }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout navbarData={navbarData} footerData={footerData}>
      <IndexPageTemplate heroData={frontmatter.hero} />
      <ProjectList />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          heroDescription
          heroDescriptionMobile
        }
      }
    }
    ...LayoutFragment
  }
`
