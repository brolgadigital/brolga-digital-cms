module.exports = ({ env }) => ({
    // ...,
    graphql: {
      config: {
        endpoint: "/graphql",
        apolloServer: {
          introspection: true,
        },
      },
    },
    'users-permissions': {
        config: {
            jwtSecret: env('JWT_SECRET')
        },
    },
    upload: {
        config: {
            provider: 'strapi-provider-upload-sftp',
        },
    },
  });