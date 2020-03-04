FROM navikt/pus-decorator
ENV APPLICATION_NAME=sosialhjelp-veiviser
ENV CONTEXT_PATH=sosialhjelp
COPY /build /app
