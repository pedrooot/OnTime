FROM bitnami/node:latest
RUN mkdir -p /app/test
RUN useradd -m node
WORKDIR /app

COPY package.json package-lock.json /app

RUN chown -R node /app
RUN npm install -g grunt-cli
USER node

RUN npm ci && rm /app/package-lock.json /app/package.json
WORKDIR /app/test
ENTRYPOINT [ "grunt", "test" ]

