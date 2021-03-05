FROM node:15.10-alpine3.13
WORKDIR /home/app
COPY ./package.json .
RUN npm install
COPY . .
EXPOSE 8081
EXPOSE 3000
CMD ["node", "app.js"]
