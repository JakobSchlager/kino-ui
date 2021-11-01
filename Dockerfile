FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["kino/package.json", "kino/package-lock.json*", "kino/npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY ./kino .
EXPOSE 80
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
