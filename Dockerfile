FROM bitnami/node:latest
RUN mkdir -p /app/test
RUN useradd -m node
WORKDIR /app/test

COPY package.json package-lock.json /app
RUN chown -R node /app
USER node

RUN npm ci

ENTRYPOINT [ "grunt", "test" ]
