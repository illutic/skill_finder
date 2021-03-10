FROM node:15.10-alpine3.13
WORKDIR /home/app
COPY ./client/*.json ./client/
COPY ./package.json .
RUN npm install
COPY . .
RUN npm install esdoc esdoc-standard-plugin
EXPOSE 8081
EXPOSE 3000
EXPOSE 5432
CMD ["node", "app.js"]
