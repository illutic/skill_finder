@echo off
timeout 2
cd ..
IF EXIST .env (
    COPY .env DeployedDocker\.env
    docker system prune
    docker-compose -f DeployedDocker/docker-compose.yml up -d
    @echo =================================================================
    @echo 				Commands:
    @echo The API server is running Automatically.
    @echo "npm run client" - Start the development server for the client code
    @echo "npm run build" - Build client code
    @echo =================================================================
    docker exec -it DeployedDocker_app_1 /bin/sh
) ELSE (
    @echo .env File not found!
)


SET /P input="Do you want to stop and clear all the containers? [y]yes or [n]No: "
   goto sub_%input%  
:sub_y
    @echo STOPPING CONTAINERS!
    docker stop DeployedDocker_app_1
    docker stop DeployedDocker_db_1
    docker stop DeployedDocker_adminer_1
    @echo CLEARING CONTAINERS!
    docker system prune -f
    goto:eof
:sub_n
    goto:eof

timeout 5