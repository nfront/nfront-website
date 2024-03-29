const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const news = graphql(`
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
    const jobs = graphql(`
        {
            allContentfulJobs {
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
            const jobsTemplate = path.resolve('./src/templates/jobs.js');
            result.data.allContentfulJobs.edges.forEach(edge => {
                createPage({
                    path: `/jobs/${edge.node.slug}/`,
                    component: jobsTemplate,
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

    return Promise.all([news, jobs]);
};
