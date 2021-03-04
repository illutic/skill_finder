@echo "COPY THE SCRIPT FILE TO WHERE YOU HAVE A TOKEN.txt FILE!"
set /p USERNAME="Enter Github Username: "
set /p token=<TOKEN.txt
docker login https://docker.pkg.github.com -u %USERNAME% -p %token%
docker-compose -f skill-finder-docker-compose.yml up -d
@echo =================================================================
@echo 				Commands:
@echo "npm run client" - Start the development server for the client code
@echo "npm run server" - Start the API server
@echo "npm run dev" - Run both servers
@echo "npm run build" - Build client code
@echo =================================================================
docker exec -it docker_skill-finder_1 /bin/sh