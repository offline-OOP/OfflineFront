FROM node:14.16.0-alpine3.12
WORKDIR app
COPY package.json yarn.lock ./
RUN yarn global add @quasar/cli
RUN yarn
COPY . .
CMD quasar dev
