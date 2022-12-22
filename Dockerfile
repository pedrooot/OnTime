
FROM node:latest as final


# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

# Cambia permisos
COPY --chown=1001 package.json /app

# Adjust permissions
RUN npm install --global --save-dev grunt grunt-cli grunt-exec jest ; chown -R 1001:1001 "/.npm" ; chown -R 1001:1001 /app

# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
