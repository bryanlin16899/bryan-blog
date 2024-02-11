# Use the official Node.js v18.18.0 image as the base image
FROM node:18.18.0

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install project dependencies
RUN npm install && \
    npm run build

# Expose the port on which your application listens
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
