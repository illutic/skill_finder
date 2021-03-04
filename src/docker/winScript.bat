@echo Make sure you have your TOKEN.txt file and your .env file in the root folder of the project!
@echo off
timeout 2
cd ..
IF EXIST .env (
    COPY .env docker\.env
    docker system prune
    docker build -t skill-finder .
    docker-compose -f docker/skill-finder-docker-compose.yml up -d
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
timeout 5
)