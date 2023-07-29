#./Dockerfile
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

## Copy all src files
COPY . .

## Run the application on the port 10010
EXPOSE 10010

CMD ["npm", "start"]
