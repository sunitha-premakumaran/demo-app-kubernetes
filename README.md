## Demo app for Kubernetes

Application using Angular as frontend and NodeJs as backend which uses PostgresSQL as the database. 

Kubernetes deployment files can be found in demo-app-deploy

### Getting started

- Install [docker](https://www.docker.com/get-started)

- Use one of these options to setup kubernetes in your local
    - Install Kubernetes with [Minikube](https://kubernetes.io/docs/setup/learning-environment/minikube/)
    - [Enable Kubernetes in Docker Desktop](https://docs.docker.com/docker-for-windows/kubernetes/)

### Setup

```
cd demo-app-frontend

```
Build the docker image of your frontend
```
docker build . -t  <tag_name>
```

Check if the image is built by running the following command
```
docker images
```
Do the same for server app
```
cd demo-app-server

```
Build the docker image of your server
```
docker build . -t <tag_name>
```

Check if the image is built by running the following command
```
docker images
```

Bring up the kubernetes deloyments and services neccessary for the app to function

```
cd demo-app-deploy/

kubectl apply -f deployments/

kubectl apply -f services/

```

Access the app from this link http://locahost:30005

You can remap the ports in demo-app-deploy/services