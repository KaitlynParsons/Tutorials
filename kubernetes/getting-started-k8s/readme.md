# Readme

Node.js web app for use in Pluralsight [Getting Started with Kubernetes](https://app.pluralsight.com/library/courses/getting-started-kubernetes/table-of-contents) video course.

Packages and dependencies will be upadted annually. May contain vulnerable code, **use at own risk**.

## App

The app, dependencies, and Dockerfile are in the `/App` folder.

## Kubernetes YAML files

All Kubernetes YAML manifests are in the `Pods`, `Services`, and `Deployments` folders.

## Pre-created image

A publically available pre-created container image is available for download [here](https://hub.docker.com/repository/docker/nigelpoulton/getting-started-k8s)

## Requirements
- Docker
- kubectl
- kubernetes

## Setup
- cd pods && kubectl apply -f pod.yml
- cd services && kubectl apply -f svc-nodeport.yml
- cd deployments && kubectl apply -f deploy-complete.yml

- URL will be at: http://localhost:31111/

## Useful Commands
- Deploy the yml file(pod, service, deployment): kubectl apply -f {name}.yml
- kubectl get {pods || services || deployments} --watch
- kubectl get {pods || services || deployments} -o wide
- kubectl describe {pods || services || deployments} hello-world
- delete the yml file(pod, service, deployment): kubectl delete -f {name}.yml
- kubectl get rs