# This file is the main docker file configurations

# Use the latest Node.js LTS (v24) runtime as the base image
FROM node:24-alpine

# Copy package files first to leverage Docker layer caching
COPY package*.json ./

# Install dependencies
# Using 'npm ci' is preferred for automated environments as it's faster and more reliable
RUN npm ci

# Bundle app source
COPY . .

# Make port 3000 available
EXPOSE 3000

# Start the application
CMD ["npm", "start"]

# Set the working directory to ./app
WORKDIR /app


# # Official Node JS runtime as a parent image
# # FROM node:10.16.0-alpine

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
# COPY package.json ./

# RUN apk add --no-cache git

# # Install any needed packages
# RUN npm install

# # Audit fix npm packages
# RUN npm audit fix

# # Bundle app source
# COPY . /app

# # Make port 3000 available to the world outside this container
# EXPOSE 3000

# # Run app.js when the container launches
# CMD ["npm", "start"]
