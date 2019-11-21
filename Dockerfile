FROM node as node-builder

ADD /web/frontend /source
ENV CI=true
WORKDIR /source
RUN npm install && npm run build

FROM navikt/pus-decorator
ENV APPLICATION_NAME=sosialhjelp-veiviser
ENV CONTEXT_PATH=sosialhjelp
COPY --from=node-builder /source/build /app
