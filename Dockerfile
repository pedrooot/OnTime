
FROM node:latest
#Ejecuciones con root
RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app
COPY package-lock.json /app

ENV PNPM_HOME="/.pnpm"
ENV PATH="${PATH}:${PNPM_HOME}/bin"

#node es el usuario genérico de la imagen base
RUN chown -R node /app

#Instalo pnpm
RUN wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
#Cambiar al usuario genérico
USER node
#Instalo dependencias
RUN pnpm install

# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
