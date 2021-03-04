# Docker Configuration

- Docker Installation: <https://www.docker.com/get-started>

- Create a ``` .env ``` in the src folder.

- The ``` .env ``` file *MUST* have the following variables:

```bash
DB_USER=<user_name>
DB_PASSWORD=<user_password>
DB_DATABASE=<database_name>
DB_URI=""
```

- Run the script.

- For mac users, type in the terminal: ``` sh path/to/the/linuxScript ```

## Explanation

Docker will try and build the application and the server in one container and the database in another, without having to install anything on your machine. Once built, you shall be redirected to the application's container CLI, where you can type any linux command.

### Dependencies of docker

#### Database Container (Container name: docker_db_1)

1) The Database Container runs on the latest postgres image pulled from the docker hub.

2) The Database container *REQUIRES* a ```.env``` file in the ```src``` directory.

3) The Database container will copy and run any ```.sql``` files found in the ```/database/schemas/``` directory.

4) The Database container runs on port ```5432```.

5) DO NOT remove or move any Dockerfiles.

#### Application Container (Container name: docker_app_1)

1) The Application Container runs Node version ```15.10-alpine3.13```

2) Uses port ```3000``` for the client server, and ```8081``` for the api server.

3) The ```DB_URI``` environment variable is automatically *overwritten*, based on the ```.env``` file.

4) Will copy the ```package.json``` file found in the ```src``` directory, and run ```npm install``` after it has succedded copying.

5) Will copy every file that exists in the ```src``` directory in the container and run ```node app.js``` after it has succedded copying.

#### Adminer Container (Container name: docker_adminer_1)

1) The Adminer Container is based on the latest adminer image pulled from the docker hub.

2) Adminer is a database administrator tool using php.

3) Runs on port ```8080```.
