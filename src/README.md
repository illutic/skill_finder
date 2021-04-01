# Skill Finder

## Installation using Docker

### Prerequisites

-   Docker ([Download](https://www.docker.com/get-started))

### Steps

1.  Create a .env file in the project root directory.

2.  Put the following variables in the .env file:

```bash
DB_USER=<user_name>
DB_PASSWORD=<user_password>
DB_DATABASE=<database_name>
DB_PORT=5432
SERVER_PORT=8081
CLIENT_PORT=3000
ADMIN_PORT=8080
DB_URI=""
```

## Standard Installation

### Prerequisites

-   Node.js ([Download](https://nodejs.org/en/))

-   npm ([Docs](https://www.npmjs.com/get-npm))

-   PostgreSQL ([Download/Windows](https://www.postgresql.org/download/) | [Download/MacOS](https://postgresapp.com/))

### Steps

1. Run the installation script:

```zsh
    npm install
```

2. Run your local PostgreSQL server.

3. Create a database for the project:

```zsh
    psql
    CREATE DATABASE skillfinder;
    \q
```

4. Create a .env file in the project root directory:

-   The name must be exact.

-   This file will hold environment variables that might be different for each of us.

-   This file will not (and should not) be pushed into GitHub.

5. Put database URI in the .env file:

```
    DB_URI=postgres://<username>:<password>@localhost:5432/skillfinder
```

-   Replace the \<username> with the one your database uses.

-   If you use Postgres for MacOS (Postgres.app), then you can skip setting the password.

-   If you use Postgres for Windows, then the default password should be set to "root".

-   If you named your database different than "skillfinder", change the last bit of the connection URI as well.

6. Put JWT secret in the .env file:

```
    JWT_SECRET=<anything>
```

-   Replace \<anything> with any secret string.

-   The secret will be used as a key for decrypting JSON web tokens.

7. Test your local version of the project:

```zsh
    npm run dev
```

-   Wait for http://localhost:3000 to open up in your browser (it might take a while).

-   Check if the API server is running by visiting http://localhost:8081

## Available Scripts

-   Start the development server for the client code:

```zsh
    npm run client
```

It will start a Browsersync process which should open your browser at http://localhost:3000. This is the development representation of the client code, which will refresh on each client code change.

-   Start the API server:

```zsh
    npm run server
```

It will start an Express server available at http://localhost:8081.

-   Run both servers:

```zsh
    npm run dev
```

It will run both the development server for the client code and the API server.

-   Build client code:

```zsh
    npm run build
```

It will compile the development version of the client code into a production version. The output code will appear at the ./client/build directory. The production version of the application will be served at http://localhost:8081.

## Directory Structure

```
    .
    ├── app.js           # Server initialisation
    ├── auth             # Auth-related files
    ├── controllers      # Controller functions
    ├── sockets          # WebSockets-related files
    ├── models           # Database models
    ├── data-access      # Data storage files
    ├── routes           # Express subrouters
    ├── constants        # Reusable constants
    ├── utils            # Reusable functions
    ├── client           # UI/Front-end code
    ├── docker           # Docker-related files
    ├── __tests__        # Jest unit tests
    ├── package.json     # Required npm packages
    ├── .env             # Environment variables
    ├── .gitignore       # Files ignored by Git
    ├── .dockerignore    # Files ignored by Docker
    ├── .conf.json       # JSDoc configuration
    ├── .prettierrc      # Prettier configuration
    └── .eslintrc.json   # ESLint configuration
```
