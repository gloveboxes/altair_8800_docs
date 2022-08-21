# Build docker images

First clear the Docker Buildx cache

```bash
docker buildx prune -a
```

### Altair on ARM64 and AMD64

```bash
docker buildx build . --platform linux/arm64,linux/amd64 --tag YOUR_DOCKER_ID/altair8800:latest --push
```

### Altair on ARM64 with Pi Sense HAT

```bash
docker buildx build . --platform linux/arm64 --tag YOUR_DOCKER_ID/altair8800-pisense:latest --push
```

### Altair as a shared service

```bash
docker buildx build . --platform linux/arm64,linux/amd64 --tag YOUR_DOCKER_ID/altair8800-cloud:latest --push
```