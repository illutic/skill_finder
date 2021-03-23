FROM node:current-alpine3.13
WORKDIR /home/app
COPY ./client/package.json ./client
COPY ./package.json .
RUN npm install --force
COPY . .
EXPOSE 8081
EXPOSE 3000
EXPOSE 5432
CMD ["node", "app.js"]
