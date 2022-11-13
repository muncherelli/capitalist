# start with node base
FROM node:16-bullseye

# set environment variables
ENV NODE_ENV=development

# create ghost install directory and install ghost cli
RUN mkdir -p /srv/www/ghost && chown node:node /srv/www/ghost && npm install ghost-cli@latest -g

# install ghost as node user
USER node
RUN cd /srv/www/ghost && ghost install local
RUN echo 'echo "run: yarn dev to develop or yarn zip to build zip in /dist"' >> /home/node/.bashrc
