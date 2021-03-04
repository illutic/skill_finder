# Docker Configuration

- Docker Installation: <https://www.docker.com/get-started>

- Authorize Docker to use Github packages.
  - Generate a Personal Access Token. <https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token>
  - Put your token in a ```TOKEN.txt``` file (case sensitive).
  - Copy a script to that directory and run it.

## OR Alternatively

- Type this in a linux terminal ```cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u YOUR_GITHUB_USERNAME --password-stdin```
- Change to the docker folder ```cd ./src/docker```
- Run the command: ``` docker-compose -f skill-finder-docker-compose.yml up -d ```
  - This command runs all services specified in the docker compose file.
- Run the command: ``` docker exec -it docker_skill-finder_1 up -d ```
  - This command allows us to use the linux terminal of the container.
- Run one of the javascript scripts: For example, ``` npm run client ```
