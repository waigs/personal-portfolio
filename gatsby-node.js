const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    // Filter out the footer, navbar, and projects so we don't create pages for those
    const posts = result.data.allMarkdownRemark.edges.filter(edge => {
      if (edge.node.frontmatter.templateKey === 'navbar') {
        return false
      } else if (edge.node.frontmatter.templateKey === 'footer') {
        return false
      } else {
        return !Boolean(edge.node.fields.slug.match(/^\/projects\/.*$/))
      }
    })

    posts.forEach(edge => {
      let component, pathName
      if (edge.node.frontmatter.templateKey === 'index-page') {
        pathName = '/'
        component = path.resolve(`src/pages/index.js`)
      } else {
        pathName = edge.node.frontmatter.path || edge.node.fields.slug
        component = path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        )
      }
      const id = edge.node.id
      createPage({
        path: pathName,
        component,
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
    externals: {
      jquery: 'jQuery',
    },
  })
}
