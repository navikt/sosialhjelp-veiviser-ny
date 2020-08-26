FROM navikt/common:0.1 AS navikt-common
FROM nginx:1.17.9-alpine

COPY --from=navikt-common /init-scripts /init-scripts
COPY --from=navikt-common /entrypoint.sh /entrypoint.sh
COPY --from=navikt-common /dumb-init /dumb-init

RUN mkdir -p /usr/share/nginx/html/sosialhjelp/

ENV APPLICATION_NAME=sosialhjelp-veiviser
ENV CONTEXT_PATH=sosialhjelp

COPY /build /usr/share/nginx/html/sosialhjelp
COPY /default.conf /etc/nginx/nginx.conf