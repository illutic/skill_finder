@echo "COPY THE SCRIPT FILE TO WHERE YOU HAVE A TOKEN.txt FILE!"
set /p USERNAME="Enter Github Username: "
set /p token=<TOKEN.txt
docker login https://docker.pkg.github.com -u %USERNAME% -p %token%
docker-compose -f skill-finder-docker-compose.yml up
timeout 5