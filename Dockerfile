
FROM node:latest as final
#Ejecuciones con root
RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app/test

ENV NPM_CONFIG_PREFIX="/home/node/.npm-global"
ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}:/home/node/.npm-global/bin"

#node es el usuario genérico de la imagen base
RUN chown -R node /app

#Cambiar al usuario genérico
USER node

RUN npm install --global pnpm grunt-cli jest
RUN npm install grunt-exec --save-dev
RUN pnpm install
# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
