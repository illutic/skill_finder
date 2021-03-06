# Docker Docs

- Docker Installation: <https://www.docker.com/get-started>

- Create a ``` .env ``` in the src folder.

- The ``` .env ``` file *MUST* have the following variables:

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

- Run the script.

- For mac users, type in the terminal: ``` sh path/to/the/linuxScript ```

## Overview

Docker will try and build the application and the server in one container and the database in another, without having to install anything on your machine. Once built, you shall be redirected to the application's container CLI, where you can type any linux command.

Upon pushing into the main branch of our github's repo, an action is run that builds the application and tries to run it. If there is an error, the application will fail to start, and the action will fail.
