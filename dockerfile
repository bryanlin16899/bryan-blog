# Use the official Node.js v18.18.0 image as the base image
FROM --platform=amd64 node:18.18.0-slim

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY . .

# Install project dependencies
RUN apt update && \
    apt install git -y && \
    npm install && \
    npm run build

# Expose the port on which your application listens
EXPOSE 3000

# Start the application
# CMD ["npm", "run", "start"]
ENTRYPOINT [ "npm", "run", "start" ]
