@echo Make sure you have your TOKEN.txt file and your .env file in the root folder of the project!
@echo off
timeout 2
cd ..
IF EXIST .env (
    COPY .env docker\.env
    docker system prune -f
    docker build -t skill-finder .
    docker-compose build -f docker/docker-compose.yml -d
    @echo =================================================================
    @echo 				Commands:
    @echo The API server is running Automatically.
    @echo "npm run client" - Start the development server for the client code
    @echo "npm run build" - Build client code
    @echo =================================================================
    docker exec -it docker_app_1 /bin/sh
) ELSE (
    @echo .env File not found!
)
)

SET /P input="Do you want to stop and clear all the containers? [y]yes or [n]No: "
   goto sub_%input%  
:sub_y
    @echo STOPPING CONTAINERS!
    docker stop docker_app_1
    docker stop docker_db_1
    docker stop docker_adminer_1
    @echo CLEARING CONTAINERS!
    docker system prune -f
    goto:eof
:sub_n
    goto:eof

timeout 5