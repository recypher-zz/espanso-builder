# Build Stage

FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN node index.js

EXPOSE 8080

