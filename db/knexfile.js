// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'postgres',
      host: 'db.zanbkprvgtircteyqgai.supabase.co',
      user: 'postgres',
      port: 6543,
      password: 'task4crayondk#K<g6V.C5Dsfsc',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
