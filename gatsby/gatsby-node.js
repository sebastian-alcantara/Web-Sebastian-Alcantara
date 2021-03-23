const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  console.log(`Creando nodo de tipo "${node.internal.type}"`);
  if (node.internal.type === `MarkdownRemark`) {
    console.log("Aca hay uno");
    const slug = createFilePath({ node, getNode, basePath: `pages` });

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
}

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `blog${node.fields.slug}`,
      component: path.resolve(`./src/templates/Blog-post.js`),
      context: {
        slug: node.fields.slug,
      },
    });
  });
}