TrAidUp Transactions Service
============================

TrAidUp Transactions Service

## Overview

This service acts as a simple REST API to a MySQL database.  It stores transaction steps after a [redacted] has been initiated.

It records the two product IDs, dates for creation, update, and deletion, and the current status.

It exposes a RESTful HTTP API using JSON for data exchange.

## Contributing

### Prerequisites

[Docker](https://www.docker.com/), [Node.js](https://nodejs.org/en/), and NPM are the only local software required.

### Installation

Clone the git repository.

In the root folder structure, create a `.mysql-env` file with the following environment variables set:

```bash
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_DATABASE=<schema name>	
MYSQL_USER=<username>
MYSQL_PASSWORD=<password>
MYSQL_ROOT_PASSWORD=<root password>
```

In development, you can use whatever schema, username, and passwords you wish.

In the root folder, run `docker-compose up -d` to start to MySQL development instance and a live updated instance of the Node application.

This will initially download and create the containers.  Subsequent runs will use the existing containers.  

### Usage

Then Node (app) container uses `nodemon` to watch for changes to files, and restarts itself as needed when changes are made.  Making changes to .json or .js files will restart the node instance.

transactions.js uses the `mysql` node module for communication with the database.

