# Instructions

 **The Deployed docker will pull the images from the github repo.**

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
