module.exports = ({ env }) => ({
  // ...,
  graphql: {
    config: {
      endpoint: "/graphql",
      playgroundAlways: true,
      apolloServer: {
        introspection: true,
      },
    },
  },
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  upload: {
    // FTP CONFIG
    config: {
      provider: "strapi-provider-upload-sftp",
      providerOptions: {
        host: `${process.env.SFTP_UPLOAD_HOST}`,
        port: `${process.env.SFTP_UPLOAD_PORT}`,
        user: `${process.env.SFTP_UPLOAD_USER}`,
        password: `${process.env.SFTP_UPLOAD_PASSWORD}`,
        basePath: `${process.env.SFTP_UPLOAD_BASEPATH}`,
        baseUrl: `${process.env.SFTP_UPLOAD_URL}`,
      },
    },

    // AWS CONFIG
    //   config: {
    //       provider: 'aws-s3',
    //       providerOptions: {
    //           accessKeyId: env('AWS_ACCESS_KEY_ID'),
    //           secretAccessKey: env('AWS_ACCESS_SECRET'),
    //           region: env('AWS_REGION'),
    //           params: {
    //               Bucket: env('AWS_BUCKET_NAME'),
    //           },
    //       },
    //   },
  },
});
