# Stage 1: Build Angular app
FROM node:18-alpine as build-stage

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --configuration production

# Stage 2: Serve with NGINX
FROM nginx:alpine

COPY --from=build-stage /app/dist/dfd-static/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
