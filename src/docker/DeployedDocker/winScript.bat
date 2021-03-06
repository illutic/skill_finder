@echo off
cd ..
cd ..
IF EXIST .env (
    COPY .env docker\DeployedDocker\.env
    cd docker\DeployedDocker
    docker-compose up -d
    @echo =================================================================
    @echo 				Commands:
    @echo The API server is running Automatically.
    @echo "npm run client" - Start the development server for the client code
    @echo "npm run build" - Build client code
    @echo =================================================================
    docker start deployeddocker_app_1
    docker exec -it deployeddocker_app_1 /bin/sh
) ELSE (
    @echo .env File not found!
)


SET /P input="Do you want to stop all the containers? [y]Yes or [n]No or [c]Clear All: "
   goto sub_%input%  
:sub_y
    @echo STOPPING CONTAINERS!
    docker stop deployeddocker_app_1
    docker stop deployeddocker_db_1
    docker stop deployeddocker_adminer_1
    goto:eof
:sub_c
    @echo STOPPING CONTAINERS!
    docker stop deployeddocker_app_1
    docker stop deployeddocker_db_1
    docker stop deployeddocker_adminer_1
    @echo CLEARING CONTAINERS!
    docker system prune -af
:sub_n
    goto:eof