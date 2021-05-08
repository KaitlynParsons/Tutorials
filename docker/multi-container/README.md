# Simple counter-app for demonstrating Docker Compose
Simple flask app that counts web site visits and stores in a default Redis backend.

**References:**
- Getting Started with Docker video training course

## Prerequisites
- docker desktop
- python

## Running the app
- docker-compose up -d
  - located at: localhost:5000

## Stopping the app
- docker-compose down


## Useful commands
- docker image ls
- docker container ls
- docker node ls
- docker service ls

## Creating a swarm
- docker swarm init

## Creating a service
- docker service create --name [name] -p 8080:8080 \
  - --replicas 3 [dockerId]/[reponame]:[imagename]

### Scaling a service
- docker service scale [name]=10

## Removing a running container from a service - useful if a container runs into issues
- docker container rm [containerId] -f

## Removing a service
- docker service rm [name]
