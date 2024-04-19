FROM node:14.17.0-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ./package.json ./


# Install npm dependencies
RUN npm install

# Copy tsconfig.json and nodemon.json
COPY ./tsconfig.json ./
COPY ./nodemon.json ./

# Copy server.ts
COPY ./src/server.ts ./src/

EXPOSE 5050

# Define default command to run your application
CMD ["npm", "run", "start"]
