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
            provider: 'strapi-provider-upload-sftp-v2',
            providerOptions: {
                host: `${process.env.SFTP_UPLOAD_HOST}`,
                port: `${process.env.SFTP_UPLOAD_PORT}`,
                user: `${process.env.SFTP_UPLOAD_USER}`,
                password: `${process.env.SFTP_UPLOAD_PASSWORD}`,
                basePath: `${process.env.SFTP_UPLOAD_BASEPATH}`,
                baseUrl: `${process.env.SFTP_UPLOAD_URL}`
            },
        },
    },
  });