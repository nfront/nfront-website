const path = require(`path`);
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const news = graphql(`
        {
            allContentfulNewsPosts {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
        .then((result) => {
            if (result.errors) {
                console.log('Error retrieving contentful data', result.errors);
            }
            const newsTemplate = path.resolve('./src/templates/news.js');
            result.data.allContentfulNewsPosts.edges.forEach((edge) => {
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
        .catch((error) => {
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
        .then((result) => {
            if (result.errors) {
                console.log('Error retrieving contentful data', result.errors);
            }
            const jobsTemplate = path.resolve('./src/templates/jobs.js');
            result.data.allContentfulJobs.edges.forEach((edge) => {
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
        .catch((error) => {
            console.log('Error retrieving contentful data', error);
        });

    const classes = graphql(`
        {
            allContentfulClasses {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
        .then((result) => {
            if (result.errors) {
                console.log('Error retrieving contentful data', result.errors);
            }
            const classTemplate = path.resolve('./src/templates/classes.js');
            result.data.allContentfulClasses.edges.forEach((edge) => {
                createPage({
                    path: `/academy/${edge.node.slug}/`,
                    component: classTemplate,
                    context: {
                        slug: edge.node.slug,
                        id: edge.node.id,
                    },
                });
            });
        })
        .catch((error) => {
            console.log('Error retrieving contentful data', error);
        });

    const courses = graphql(`
        {
            allContentfulCourses {
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    `)
        .then((result) => {
            if (result.errors) {
                console.log('Error retrieving contentful data', result.errors);
            }
            const courseTemplate = path.resolve('./src/templates/courses.js');
            result.data.allContentfulCourses.edges.forEach((edge) => {
                createPage({
                    path: `/academy/${edge.node.slug}/`,
                    component: courseTemplate,
                    context: {
                        slug: edge.node.slug,
                        id: edge.node.id,
                    },
                });
            });
        })
        .catch((error) => {
            console.log('Error retrieving contentful data', error);
        });

    return Promise.all([news, jobs, classes, courses]);
};
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === 'build-html') {
        /*
         This code ignores auth0-js during the server-side build since it relies on browser APIs like window.
         */
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /auth0-js/,
                        use: loaders.null(),
                    },
                ],
            },
        });
    }
};
