docker-compose up -d
docker exec -t docker_app_1 sh -c "npm test"
docker exec -it docker_app_1 sh -c "npm install --legacy-peer-deps --prefix client"
docker start docker_app_1
echo =================================================================
echo The API server is running.
echo 				Commands:
echo "npm run client" - Start the development server for the client code
echo =================================================================
docker exec -it docker_app_1 /bin/sh

echo Delete All unused Containers/Images/Volumes? [s[stop]/c[clear]/n[no]]
read input
if [ $input = "c" ]
then
    echo STOPPING CONTAINERS!
    docker stop docker_app_1
    docker stop docker_db_1
    docker stop docker_adminer_1
    echo CLEARING CONTAINERS!
    sleep 2
    docker system prune -af
elif [ $input = "s" ]
then
    echo STOPPING CONTAINERS!
    docker stop docker_app_1
    docker stop docker_db_1
    docker stop docker_adminer_1
fi