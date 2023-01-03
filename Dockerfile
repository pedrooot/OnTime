
FROM node:latest
#Ejecuciones con root
RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app
COPY package-lock.json /app

ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}:${NPM_CONFIG_PREFIX}/bin"

#node es el usuario genérico de la imagen base
RUN chown -R node /app

#Cambiar al usuario genérico
USER node

RUN npm install --global pnpm grunt-cli jest
RUN pnpm install
# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
