exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const result = await graphql(`
        {
            allSanityBlog(filter: { slug: { current: { ne: null } } }) {
                edges {
                    node {
                        title
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    const blogs = result.data.allSanityBlog.edges || [];

    blogs.forEach(({ node }, index) => {
        const path = `/blog/${node.slug.current}`;

        createPage({
            path,
            component: require.resolve('./src/templates/blog.jsx'),
            context: {
                slug: node.slug.current,
                prevTitle: index === 0 ? null : blogs[index - 1].node.title,
                prev: index === 0 ? null : blogs[index - 1].node,
                nextTitle: index === blogs.length - 1 ? null : blogs[index + 1].node.title,
                next: index === blogs.length - 1 ? null : blogs[index + 1].node,
            },
        });
    });
};
