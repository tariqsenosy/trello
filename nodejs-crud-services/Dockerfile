# Use an official Node.js runtime as a base image
FROM node:20.9.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application to the working directory
COPY . .

# Expose the port on which the app runs
EXPOSE 3500

# Define the command to run your application
CMD ["node", "server.js"]
