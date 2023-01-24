FROM bitnami/node:latest
#Ejecuciones con root
RUN mkdir -p /app/test
RUN useradd -m node
WORKDIR /app/test

COPY package.json package-lock.json /app
#Cambiamos permiso
RUN chown -R node /app
#Cambiamos de usuario
USER node
#Instalo dependencias
RUN npm ci
# Configure entrypoint

ENTRYPOINT [ "grunt", "test" ]
