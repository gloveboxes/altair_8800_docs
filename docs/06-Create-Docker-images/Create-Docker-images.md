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

Remove the **#<REMOVE_THIS_COMMENT_TO_ENABLE_PI_SENSE_HAT>** comment from the dockerfile to enable PI Sense HAT image build.

```text
#<REMOVE_THIS_COMMENT_TO_ENABLE_PI_SENSE_HAT>RUN cd /Altair8800/AltairHL_emulator && sed -i 's/# set(ALTAIR_FRONT_PI_SENSE_HAT/set(ALTAIR_FRONT_PI_SENSE_HAT/g' CMakeLists.txt
```

```bash
docker buildx build . --platform linux/arm64 --tag YOUR_DOCKER_ID/altair8800-pisense:latest --push
```

### Altair as a shared service

Remove the **#<REMOVE_THIS_COMMENT_TO_ENABLE_CLOUD>** comment from the dockerfile to enable cloud image build.

```text
#<REMOVE_THIS_COMMENT_TO_ENABLE_CLOUD>RUN cd /Altair8800/AltairHL_emulator && sed -i 's/# set(ALTAIR_CLOUD/set(ALTAIR_CLOUD/g' CMakeLists.txt
```

```bash
docker buildx build . --platform linux/arm64,linux/amd64 --tag YOUR_DOCKER_ID/altair8800-cloud:latest --push
```