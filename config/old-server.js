module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: '/',
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'df9b307a788f07ee824eb0013d26a607'),
    },
  },
});