# Use the official Node.js image as a base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies including axios
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

ENV HUE_API_KEY=
ENV HUE_API_URL=

# Expose port 3000 to the outside world
EXPOSE 443

# Command to run your application
CMD ["node", "index.js"]
