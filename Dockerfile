FROM node

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .


# Install npm dependencies
RUN npm install

#Bundle app source
COPY . ./

# Copy server.ts
# COPY ./src/server.ts ./src/

#port 5000
EXPOSE 5050

# Define default command to run your application
CMD ["npm", "start"]
