FROM ubuntu
RUN apt-get update && apt-get upgrade && apt-get install -y curl \
 && curl -fsSL https://deb.nodesource.com/setup_16.x | bash - \
 && curl -fsSL https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update && apt-get install -y yarn nodejs ffmpeg flac fdkaac zip unzip vorbis-tools opus-tools make inkscape g++ git \
 && rm -rf /var/lib/apt/lists/*
ARG USERNAME=user
ARG GROUPNAME=user
ARG UID=1001
ARG GID=1001
RUN groupadd -g $GID $GROUPNAME && \
    useradd -m -s /bin/bash -u $UID -g $GID $USERNAME
USER $USERNAME
WORKDIR /app
CMD yarn start