const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allContentfulPost {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
        .then(result => {
            if (result.errors) {
                console.log('Error retrieving contentful data', result.errors);
            }
            const newsTemplate = path.resolve('./src/templates/news.js');
            result.data.allContentfulPost.edges.forEach(edge => {
                createPage({
                    path: `/news/${edge.node.slug}/`,
                    component: newsTemplate,
                    context: {
                        slug: edge.node.slug,
                        id: edge.node.id,
                    },
                });
            });
        })
        .catch(error => {
            console.log('Error retrieving contentful data', error);
        });
};
