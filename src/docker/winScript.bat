@echo Make sure you have your TOKEN.txt file and your .env file in the root folder of the project!
@echo off
timeout 2
cd ..
IF EXIST .env (
    COPY .env docker\.env
    set /p USERNAME="Enter Github Username: "
    set /p token=<TOKEN.txt
    docker login https://docker.pkg.github.com -u %USERNAME% -p %token%
    docker-compose -f docker/skill-finder-docker-compose.yml up -d
    @echo =================================================================
    @echo 				Commands:
    @echo The API server is running Automatically.
    @echo "npm run client" - Start the development server for the client code
    @echo "npm run dev" - Run both servers
    @echo "npm run build" - Build client code
    @echo =================================================================
    docker exec -it docker_skill-finder_1 /bin/sh
) ELSE (
    @echo .env File not found!
)
timeout 5
)