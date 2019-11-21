#FIXME: Replace with "node" (latest) when https://github.com/nodejs/node/issues/29239 is resolved
FROM node:12.8.1 as node-builder

ADD . /source
ENV CI=true
WORKDIR /source
RUN npm install && npm run build

FROM navikt/pus-decorator
ENV APPLICATION_NAME=sosialhjelp-veiviser
ENV CONTEXT_PATH=sosialhjelp
COPY --from=node-builder /source/build /app
