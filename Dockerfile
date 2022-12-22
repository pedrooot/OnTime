
FROM node:latest as final


# Create app and log directories
RUN mkdir -p /app/test /.npm

WORKDIR /app/test

# Cambia permisos
COPY --chown=1001 package.json /app

# Adjust permissions
RUN npm install ; chown -R 1001:1001 "/.npm" ; chown -R 1001:1001 /app ; npm install --global pnpm grunt-cli ; pnpm install ;

# Configure entrypoint
ENTRYPOINT [ "grunt", "test" ]
