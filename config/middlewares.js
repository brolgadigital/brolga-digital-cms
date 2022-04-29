module.exports = [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          // using env vars:
          'img-src': ['*', "'self'", 'data:', 'blob:', `${process.env.SFTP_UPLOAD_BASE_URL}`],
          'media-src': ["'self'", 'data:', 'blob:', `${process.env.SFTP_UPLOAD_BASE_URL}`],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];