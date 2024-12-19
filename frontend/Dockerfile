# my node version is v20.11.1

# use the base image fom docker hub
FROM node:20.11.1-alpine

# set the working directory inside the container
WORKDIR /app

# copy only package files (package.json, package-lock.json) initially to leverage Docker caching
COPY package*.json ./

# install dependencies
RUN npm install

# copy the rest of the application code
COPY . .

# expose the port which app will run on
EXPOSE 5173

# start the app
CMD [ "npm" , "run" , "dev" ]