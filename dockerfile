# Use the official Node.js 18 image as the base image
FROM node:18-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Use a minimal Node.js image for the final image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the built application and production dependencies from the builder image
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]

#start
