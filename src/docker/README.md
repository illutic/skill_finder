# Docker Configuration

- Docker Installation: <https://www.docker.com/get-started>

- Authorize Docker to use Github packages.

  - Generate a Personal Access Token. <https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token>
  - Put your token in a ```TOKEN.txt``` file (case sensitive), copy a script to that location and run it.

## OR Alternatively

- Type this in a terminal ```cat ~/TOKEN.txt | docker login https://docker.pkg.github.com -u USERNAME --password-stdin```

- Change to the docker folder ```.../src/docker```

- Run the command: ``` docker-compose -f skill-finder-docker-compose.yml up ```
