# start with node base
FROM node:16-bullseye

# set environment variables
ENV NODE_ENV=development

# create ghost install directory and install ghost cli
RUN mkdir -p /srv/ghost && chown node:node /srv/ghost && npm install ghost-cli@latest -g

# install ghost as node user
USER node
RUN cd /srv/ghost && ghost install local
