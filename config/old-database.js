module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
      },
      options: {
        pool: { 
          min: 0,
          max: 10,
          acquireTimeoutMillis: 1000,
          createTimeoutMillis: 1000,
          idleTimeoutMillis: 1000,
          reapIntervalMillis: 1000,
          createRetryIntervalMillis: 1000,
        }
      },
    },
  },
});