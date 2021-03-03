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

3. Run your local PostgreSQL server.

4. Create a database for the project:

```zsh
    psql
    CREATE DATABASE setap;
    \q
```

5. Create a .env file in the project root directory:

- The name must be exact.

- This file will hold environment variables that might be different for each of us.

- This file will not (and should not) be pushed into GitHub.

6. Put the following code in the .env file:

```
    DB_URI=postgres://USERNAME:@localhost:5432/setap
```

- Replace the USERNAME with the one your database uses.

- It is probably a username visible at the beginning of the psql command prompt.

- If you named your database other than "setap", change the last bit of the connection URI as well.

7. Test your local version of the project:

```zsh
    npm run dev
```

- Wait for http://localhost:3000 to open up in your browser (it might take a while).

- Check if the API server is running at http://localhost:8081/api.

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

It will start an Express server available at http://localhost:8081. That is the server that responds to HTTP requests, communicates with the database, etc.


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

## Directory Structure

```
    .
    ├── app.js           # Server initialisation
    ├── controllers      # Controller functions
    ├── models           # Database models
    ├── database         # Database connection
    ├── routes           # Subrouters
    ├── constants        # Reusable constants
    ├── utils            # Reusable functions
    ├── client           # UI/Front-end code
    ├── node_modules     # Installed npm packages
    ├── package.json     # Required npm packages definition
    ├── .env             # Environment variables
    ├── .gitignore       # Files ignored by Git
    ├── .prettierrc      # Prettier configuration
    └── .eslintrc.json   # ESLint configuration
```

## Know-how

How to work on this project:

- Do not push to the main branch. Switch to the dev branch. The main branch should only hold a working, clean production code.

- When you start working on a new feature, create a new branch growing from the dev branch.

- If you only work on the API functionality, use the API server (npm run server).

- If you only work on the UI part of the application, use the development server (npm run client).

- If you want to work on both sides, run both servers simultaneously (npm run dev).

- When you are done with your work, open a pull request so we check it and merge your branch into the dev branch.

- The build script is only needed for deployment. It does the compilation, minification and other optimation stuff. The output code will eventually end up on a hosting service, such as Heroku.

- We will merge the dev branch into the main branch from time to time. We will also set up a Heroku process that will automatically deploy the main branch code.
