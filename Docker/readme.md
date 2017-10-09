# Docker for web developer

Development --> Staging --> Production

[Docker Tools] (https://www.docker.com/docker-toolbox)

- Provides image and container tools
- Virtual Machine (for Windows /Mac)

```javascript
- Docker Client
- Docker Machine
- Docker Compose
- Docker Kitematic
- VirtualBox
```

## Setting up Your Docker Environment

- Installing Docker on Mac
[Community Edition (CE)](https://store.docker.com/editions/community/docker-ce-desktop-mac)

- Docker kitematic Overview (GUI)

```javascript
$ docker-machine ls [machine name]
$ docker-machine start [machine name]
$ docker-machine stop [machine name]
$ docker-machine env [machine name]
$ docker-machine ip [machine name]
$ docker-machine status [machine name]


$ docker pull [image name]
$ docker images
$ docker rmi [image id]
$ docker run [image name]
$ docker ps -a
$ coker rm [container Id]
```


