FROM navikt/node-express:12.2.0-alpine

ENV NODE_ENV production

RUN npm install -g mustache-express@1.3.0

WORKDIR /app
COPY server.js server.js
COPY build build/

CMD ["node", "./server.js"]