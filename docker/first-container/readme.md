# Nodejs web app

Express app with handlebars view engine.

## Prerequisites
- Docker Hub
- Nodejs
- Git

## Setup
- npm install
- docker image build -t [dockerid]/[reponame]:[imagename]
- docker login
- docker image push [dockerid]/[reponame]:[imagename]
- docker container run -d --name [name] -p 8000:8080 \
 - [dockerid]/[reponame]:[imagename]

## Starting the container
- docker container start [name]

## Stopping the container
- docker container stop [name]

## Removing the container
- docker container rm [name]

## Removing the image
- docker image rm [dockerid]/[reponame]:[imagename]

