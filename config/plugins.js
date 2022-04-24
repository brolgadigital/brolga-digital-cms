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
        provider: 'strapi-provider-upload-ftp-v2',
        providerOptions: {
          host: env('SFTP_UPLOAD_HOST'),
          user: env('SFTP_UPLOAD_USER'),
          password: env('SFTP_UPLOAD_PASSWORD'),
          basePath: env('SFTP_UPLOAD_BASEPATH'),
          baseUrl: env('SFTP_UPLOAD_BASEURL'),
        },
      },
    },
  });