FROM node:18-alpine

WORKDIR /app

COPY yarn.lock .

COPY package.json .

RUN yarn

RUN chmod 777 /app

COPY . .

EXPOSE 3001

CMD [ "yarn", "start" ]
