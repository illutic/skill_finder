FROM node:15.10-alpine3.13
WORKDIR /home/app
ENV POSTGRES_PASSWORD: password
COPY package*.json ./
COPY client/package*.json ./client/
RUN npm install
COPY . .
EXPOSE 8080
EXPOSE 3000
CMD ["node", "app.js"]