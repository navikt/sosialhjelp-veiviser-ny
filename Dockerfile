FROM navikt/pus-decorator
ENV APPLICATION_NAME=sosialhjelp-veiviser
ENV CONTEXT_PATH=sosialhjelp
ENV FOOTER_TYPE=WITH_ALPHABET
COPY /build /app
