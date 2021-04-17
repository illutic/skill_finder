@echo off
cd ..
IF EXIST .env (
    COPY .env docker\.env
    docker-compose -f docker/docker-compose.yml up -d
    docker exec -it docker_app_1 sh -c "npm install --legacy-peer-deps --prefix client"
    docker exec -t docker_app_1 sh -c "npm test"
    docker start docker_app_1
    @echo =================================================================
    @echo The API server is running.
    @echo 				Commands:
    @echo "npm run client" - Start the development server for the client code
    @echo =================================================================
    docker exec -it docker_app_1 /bin/sh
) ELSE (
    @echo .env File not found!
)

SET /P input="Do you want to stop all the containers? [y]Yes or [n]No or [c]Clear All: "
   goto sub_%input%
:sub_y
    @echo STOPPING CONTAINERS!
    docker stop docker_app_1
    docker stop docker_db_1
    docker stop docker_adminer_1
    goto:eof
:sub_c
    @echo STOPPING CONTAINERS!
    docker stop docker_app_1
    docker stop docker_db_1
    docker stop docker_adminer_1
    @echo CLEARING CONTAINERS!
    docker system prune -af
:sub_n
    goto:eof