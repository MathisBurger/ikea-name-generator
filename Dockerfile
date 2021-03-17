FROM node:14-alpine

WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build

RUN npm i -g serve

RUN rm -r ./node_modules
RUN rm -r ./src

EXPOSE 5000

CMD ["serve", "-s", "build"]


