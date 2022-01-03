module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'df9b307a788f07ee824eb0013d26a607')
  },
});
