FROM node:current-alpine3.13
WORKDIR /home/app
COPY ./package.json .
COPY ./client/package.json ./client
RUN npm install
COPY . .
EXPOSE 8081
EXPOSE 3000
EXPOSE 5432
CMD ["node", "app.js"]
