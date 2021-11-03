FROM node:14.17.0-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY kino/package.json /app
RUN npm install
COPY kino/. /app
RUN npm run build --prod

FROM nginx:alpine
COPY --from=build-step /app/dist/* /usr/share/nginx/html
EXPOSE 80:80

#WORKDIR /app/dist/
#CMD ["npm","start","--proxy-config proxy.conf.json"]
