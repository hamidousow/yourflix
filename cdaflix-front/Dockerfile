FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/cdaflix-ang /usr/share/nginx/html/
COPY /nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
EXPOSE 443