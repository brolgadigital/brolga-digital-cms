module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 8080),
  url: 'https://cms.brolgadigital.com.au',
  app: {
    keys: env.array("APP_KEYS", ["testKey1", "testKey2"]),
  },
  // ...
});