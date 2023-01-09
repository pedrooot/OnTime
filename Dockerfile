FROM node:latest
#Ejecuciones con root
RUN mkdir -p /app/test

WORKDIR /app/test

COPY package.json /app

ENV PNPM_HOME="/.pnpm" PATH="${PATH}:${PNPM_HOME}/bin"

#Cambiamos permisos e instalamos pnpm
RUN chown -R node /app && wget -qO /bin/pnpm "https://github.com/pnpm/pnpm/releases/latest/download/pnpm-linuxstatic-x64" && chmod +x /bin/pnpm
#Cambiar al usuario genérico
USER node
#Instalo dependencias
RUN pnpm install

# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
