# crud-io

crud-io is a Knex application created in Javascript to help me learn the fundamentals of using the Knex library with other back end technologies.

## Links

* [Heroku Server](http://crud-io.herokuapp.com/) - http://crud-io.herokuapp.com/
* [Back-End Repository](https://github.com/jimbucktoo/crud-io) - https://github.com/jimbucktoo/crud-io/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* [NPM](https://www.npmjs.com/) - npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
* [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) - npm is a package manager for the JavaScript programming language. It is the default package manager for the JavaScript runtime environment Node.js.
* [Node-Postgres](https://node-postgres.com/) - Node-Postgres is a collection of node.js modules for interfacing with your PostgreSQL database.

### Installing

A step by step series of examples that tell you how to get a development env running

1. Install dependencies:

```
npm install
```

2. Initialize server:

```
npm start
```

3. Visit the following URL and you should see the data populate the page:

```
http://localhost:3001/
```

4. Migrate to the latest deployment:

```
knex migrate:latest
```

5. Run the seeds:

```
knex seed:run
```


## Deployment

Steps to take for project deployment on a live server:

1. Create Heroku Database:

```
heroku create dataBaseName
```

2. Install Postgresql Heroku add-on:

```
heroku addons:create heroku-postgresql:hobby-dev
```

3. Migrate to the latest deployment:

```
heroku run knex migrate:latest
```

4. Run the seeds:

```
heroku run knex seed:run
```

5. Check to make sure it is running on the live server:

```
http://crud-io.herokuapp.com/
```

## Technologies

* [Express](https://expressjs.com/) - Express is a web application framework for Node.js. It is designed for building web applications and APIs.
* [Node](https://nodejs.org/en/) - Node.js is an open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.
* [Knex](https://knexjs.org/) -  Knex.js is a "batteries included" SQL query builder for Postgres, MSSQL, MySQL, MariaDB, SQLite3, Oracle, and Amazon Redshift designed to be flexible, portable, and fun to use.
* [Postgresql](https://postgresql.org/) - Postgresql is an object-relational database management system.

## Authors

* **James Liang** - *Initial work* - [jimbucktoo](https://github.com/jimbucktoo/jimbucktoo)

