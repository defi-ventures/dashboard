# base image
FROM node:alpine

# set working directory
WORKDIR /app

# install and cache app dependencies using yarn
ADD package.json yarn.lock .npmrc ./
RUN yarn --pure-lockfile

# Copy all frontend stuff to new "app" folder
COPY . .

RUN chmod +x ./run.sh

EXPOSE 9000