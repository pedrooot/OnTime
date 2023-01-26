FROM bitnami/node:latest
RUN mkdir -p /app/test
RUN useradd -m node
WORKDIR /app/test

COPY package.json  package-lock.json /app

ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PATH="${PATH}:/home/node/.npm-global/bin"

RUN chown -R node /app
USER node
RUN npm install -g grunt-cli jest
RUN npm ci
ENTRYPOINT [ "grunt", "test" ]

