module.exports = {
    siteMetadata: {
        title: `Edward Saavedra | Code / Creative`,
        description: `Full stack software developer, illustrator, and writer.`,
        author: `@edsaav`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/src/data/`,
            },
        },
    ]
}