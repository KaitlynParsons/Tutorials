# Swarm stack

## Python flask app:
- stores counter in redis
- returns count and hostname of contriner servicing request

## Prerequisite
- docker desktop
- python

## Setup 
- docker image build -t [dockerId]/[repoName]:[imageName] .
- docker image push [dockerId]/[repoName]:[imageName]

## Deploy
- docker stack deploy -c docker-compose.yml [name]

### Useful commands
- docker stack ls
- docker stack services [name]
- docker stack ps [name]

## Remove stack
- docker stack rm [name]