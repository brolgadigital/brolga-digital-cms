module.exports = [
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          // using env vars:
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "brolga-digital-strapi-images.s3.ap-southeast-2.amazonaws.com",
            "*.amazonaws.com",
            `${process.env.SFTP_UPLOAD_BASE_URL}`,
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "brolga-digital-strapi-images.s3.ap-southeast-2.amazonaws.com",
            "*.amazonaws.com",
            `${process.env.SFTP_UPLOAD_BASE_URL}`,
          ],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
