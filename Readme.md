# Knex SQL query builder

- refer-docs:https://knexjs.org/

- You  can also use KnexCli to genearate migration and configuration setup:

install knex globally :

``` bash
npm install knex -g
```


``` bash 
 knex init
```
or

``` bash 
npx knex init
```


* Install Dependencies:

```bash

npm install

```

- Start the Server :

``` bash
npm install
```

- Migrate to PostgresSQL

* npx knex migrate:latest --knexfile db/knexfile

```bash
npm run  migrate
```

- Seed to PostgresSQL

* npx knex seed:run latest --knexfile db/knexfile

```bash
npm run seed
```


** Replace  db > knexfile database configuration  it's my personal profile credentials 