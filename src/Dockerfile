FROM node:15.10-alpine3.13
WORKDIR /home/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8081
EXPOSE 3000
WORKDIR /
COPY ./database/scripts/* ./docker-entrypoint-initdb.d
COPY ./database/schemas/* ./docker-entrypoint-initdb.d
USER postgres
VOLUME  ["/etc/postgresql", "/var/log/postgresql", "/var/lib/postgresql"]
CMD ["node", "app.js"]