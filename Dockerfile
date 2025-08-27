# Stage 1: Build the application using a full Node image
FROM node:20-bullseye AS builder

# Install Python and build essentials (needed for some native modules)
RUN apt-get update && \
    apt-get install -y python3 make g++ && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/* # Clean up apt cache to reduce image size

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package.json package-lock.json ./

# Clean install dependencies
RUN npm ci --legacy-peer-deps

# Copy the rest of the application
# This step will now be much faster and won't include node_modules if .dockerignore is set up
COPY . .

# Force clean build environment (This might be redundant if the build process handles its own cache well,
# but keeping it won't harm. However, the previous error wasn't related to this.)
# RUN rm -rf node_modules/.cache # Removing this as it's typically for local development and might not be necessary inside the container

# Build the application with additional flags
RUN npm run build

# Stage 2: Serve the application using Nginx
FROM nginx:alpine

# Copy the built assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config for client-side routing
# It's better to create a separate file and COPY it, for readability and maintainability.
# Assuming you'll create a file named nginx.conf in the same directory as your Dockerfile
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
