FROM node:22-slim

ENV NODE_ENV development

WORKDIR /react-project

COPY . .

RUN npm install

CMD ["npm","start"]