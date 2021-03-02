# T33 Project

## Prerequisites

- Node.js ([Download](https://nodejs.org/en/))

- npm ([Docs](https://www.npmjs.com/get-npm))

- PostgreSQL ([Download/Windows](https://www.postgresql.org/download/) | [Download/MacOS](https://postgresapp.com/))

- Prettier ([Downlad/VSC](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) | [Download/Atom](https://atom.io/packages/prettier-atom))

- ESLint ([Download/VSC](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) | [Download/Atom](https://atom.io/packages/linter-eslint))


## Installation

1. Switch to the development branch:

```zsh
    git checkout dev
```

2. Run the installation script:

```zsh
    npm install
```

3. Run your local database server

4. Create a PostgreSQL database for the project

```zsh
    psql
    CREATE DATABASE setap;
    \q
```

5. Create a .env file in the project root directory

- The name must be exact

6. Put the following code in the .env file:

```
    DBURI=postgres://USERNAME:@localhost:5432/setap
```

- Replace the USERNAME with the one your database uses.

- It is probably a username visible at the beginning of the psql command prompt.

## Available Scripts

- Start the development server for the client code:

```zsh
    npm run client
```

It will start a Browsersync process which should open your browser at http://localhost:3000. This is the development representation of the client code, which will refresh on each client code change.

- Start the API server:

```zsh
    npm run server
```

It will start an Express server available at http://localhost:8080. That is the server that responds to HTTP requests, communicates with the database, etc.


- Run both servers:

```zsh
    npm run dev
```

It will run both the development server for the client code and the API server.

- Build client code:

```zsh
    npm run build
```

It will compile the development version of the client code into a production version. The output code will appear at the ./client/build directory.

## How to work on this project

- If you only work on the API functionality, use the API server (npm run server).

- If you only work on the UI part of the application, use the development server (npm run client).

- If you want to work on both sides, run both servers (npm run dev).

- The build script is only needed for deployment. It does the compilation, minification and other optimation stuff. The output code will eventually end up on a hosting service, such as Heroku.