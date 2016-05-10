TrAidUp Transactions Service
============================

TrAidUp Transactions Service

## Overview

This service acts as a simple REST API to a MySQL database.  It stores transaction steps after a [redacted] has been initiated.

It records the two product IDs, dates for creation, update, and deletion, and the current status.

## Contributing

### Prerequisites

Docker, Node.js, and NPM are the only local software required.

### Installation

Clone the git repository.

In the root folder structure, create a `.mysql-env` file with the following environment variables set:

```bash
MYSQL_DATABASE=<value>	
MYSQL_USER=<value>
MYSQL_PASSWORD=<value>
MYSQL_ROOT_PASSWORD=<value>
```

In the root folder, run `docker-compose up -d` to start to MySQL development instance and a live updated instance of the Node application.

